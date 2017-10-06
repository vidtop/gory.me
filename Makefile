ver=5.1.6.1
app_v=0.0.1
stre_v=0.0.1
data_v=0.0.1
views_v=0.0.1
all: js/streamium.js js/s3bubble.js
	mkdir -p ${ver}

	rsync -avz css images js ${ver}/

	mkdir -p ${ver}/data_${data_v}	
	rsync -avz data/* ${ver}/data_${data_v}

	./tools/doT/bin/dot-packer -s ./templates -d ./views
	mkdir -p ${ver}/views_${views_v}	
	rsync -avz views/* ${ver}/views_${views_v}


	mkdir -p ${ver}/js
	uglifyjs js/app.js -c -m -o ${ver}/js/app_${app_v}.js	
	uglifyjs js/streamium.js -c -m -o ${ver}/js/streamium_${stre_v}.js
	uglifyjs js/s3bubble.js -c -m -o ${ver}/js/s3bubble.js


