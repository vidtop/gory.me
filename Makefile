ver=5.1.4
all: js/streamium.js js/s3bubble.js
	mkdir -p ${ver}
	./tools/doT/bin/dot-packer -s ./templates -d ./views
	rsync -avz css data views js ${ver}/
	mkdir -p ${ver}/js
	uglifyjs js/app.js -c -m -o ${ver}/js/app.js	
	uglifyjs js/streamium.js -c -m -o ${ver}/js/streamium.js
	uglifyjs js/s3bubble.js -c -m -o ${ver}/js/s3bubble.js


