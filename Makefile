up:
	docker-compose up -d
build-image:
	docker-compose build
build-app:
	docker-compose run --rm spa install