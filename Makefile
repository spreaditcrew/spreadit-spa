up:
	docker-compose up -d
build-image:
	docker-compose build
build-app:
	docker-compose exec spa npm install
dev:
	docker-compose exec spa npm run dev