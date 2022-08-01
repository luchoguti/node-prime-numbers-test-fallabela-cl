## Description

Documentation Api calculate prime numbers

## Pre - Installation

The system should have installed:

[NodeJs](https://nodejs.org/es/) -
[NPM](https://www.npmjs.com/) -
[Docker](https://www.docker.com/) 

## Installation

Option One:

Downloader file : [docker-compose.yml](https://github.com/luchoguti/node-prime-numbers-test-fallabela-cl/blob/master/docker-compose.yml)


Option two:

```bash
$ git clone https://github.com/luchoguti/node-prime-numbers-test-fallabela-cl.git
$ cd node-prime-numbers-test-fallabela-cl
$ npm install
```

## Running the Api

Option One:

Execute with file docker-compose.yml:
```bash
$ docker-compose up -d
```

Option two:

Clone repository:

```bash
# Execute this command for mode development
$ npm run start

# Execute this command for watch mode
$ npm run dev

# create file .env in path project with this constants
$ PORT=3003
$ NUMBER_START_CALCULATE=2
```
Go to visit url http://localhost:3003/prime_numbers/7 for example for calculate prime numbers