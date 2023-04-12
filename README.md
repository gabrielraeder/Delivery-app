<h1 align="center">Delivery app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D16.0.0-blue.svg" />
  <a href="https://github.com/betrybe/sd-0x-project-delivery-app#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

## Sobre o Projeto
  > Projeto desenvolvido em equipe durante o curso de desenvolvimento Web da [Trybe](https://www.betrybe.com/)
  ### O App:
  Acesso via login:
Tanto clientes como pessoas vendedoras, assim como admin, que administra o sistema, tem acesso ao aplicativo via login, porém para funções diferentes:

A pessoa cliente, que compra da lista de produtos;
A pessoa vendedora, que aprova, prepara e entrega;
A pessoa administradora, que gerencia quem usa o aplicativo;
Faz a comunicação entre clientes e pessoas vendedoras:
A pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem o comprou, essa pessoa marca o pedido como "recebido". Ambos possuem detalhes sobre seus pedidos;

Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, pode ver as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

## Build with:
### Front-end:
 - Javascript
 - React
 - Css
 - React Router
 - Jest
 - RTL
 - Figma

### Back-end:
 - Javascript
 - Express.js
 - Sequelize
 - MySQL
 - Node.js
 - Docker
 - Mocha
 - Chai
 - Sinon

## Install

```sh
npm install
```
## Docker

```sh
cd back-end && docker-compose up -d
```

## Enviroment

```sh
cd back-end && cat <<EOF >.env
NODE_ENV=development
API_PORT=3001
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DB_NAME=delivery-app
EVAL_ALWAYS_RESTORE_DEV_DB=true
EOF
```


## Usage

```sh
npm start
```

## Run tests

Back-end
```sh
cd back-end && npm run test
```
Front-end
```sh
cd front-end && npm run test
```

## Authors

👤 **Gabriel Gonçalves**
* [Github](https://github.com/gabrielraeder)
* [Linkedin](https://www.linkedin.com/in/gabrielraedergoncalves/)

👤 **Rubens Deola**
* [Github](https://github.com/RDeola)
* [Linkedin](https://www.linkedin.com/in/rubens-deola/)

👤 **Fabiana Moraes**
* [Github](https://github.com/Fabianamrs)
* [Linkedin](https://www.linkedin.com/in/fabiana-mrs/)

👤 **Renan Fernandes**
* [Github](https://github.com/RenanFernandess)
* [Linkedin](https://www.linkedin.com/in/orenanfernandes/)

## Show your support

Give a ⭐️ if this project helped you!
