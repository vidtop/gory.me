ver=5
all: js/streamium.js js/s3bubble.js
	mkdir -p ${ver}
	./tools/doT/bin/dot-packer -s ./templates -d ./views
	rsync -avz css data views ${ver}/
	mkdir -p ${ver}/js
	uglifyjs js/app.js -c -m -o ${ver}/js/app.js	
	uglifyjs js/streamium.js -c -m -o ${ver}/js/streamium.js
	uglifyjs js/s3bubble.js -c -m -o ${ver}/js/s3bubble.js
	rsync -avz js/jquery.js js/jquery-migrate.min.js js/doT.min.js js/fastdom.min.js js/lazyload.min.js js/blazy.min.js ${ver}/js/

