
# Teste Gazin

Projeto desenvolvido de acordo com os [requisitos solicitados](https://github.com/nelsonptobias/pontential-crud).

Encontra-se dividido em dois diretórios `api` para o backend e `web` para o frontend.

As stacks escolhidas foram:
* **Backend**: PHP 7.4, Laravel 7 e MySQL 5.7;
* **Frontend**: React 16 e Bootstrap 4;


Segue os procedimentos para inicialização do projeto.

Requisitos: Docker 19+ e Node 12+/Yarn;

## Backend
No diretório `api`, rode os seguintes comandos:
```
cp .env.example .env

docker-compose up -d

docker-compose exec api composer install

docker-compose exec api php artisan key:generate

docker-compose exec api php artisan migrate

docker-compose exec api php artisan db:seed
````

Pronto, a API estará disponível através da seguinte url: ``http://localhost:8000``.

## Frontend
No diretório `web`, rode os seguintes comandos:
```
yarn install

yarn start
````

A interface web estará disponível através da seguinte url: ``http://localhost:3000``.
