# node-portfolio

------------------------------

Portfolio web in Node + Docker

## About This

Portifolio Web built in Node, containerized by using Docker.

## Environment

Create `.env` file based on `.env_sample`. It is required to set up your MongoDB environment before starting the node console:

* `MONGO_DATABASE`: Mongo database name.
* `MONGO_USERNAME`: Mongo username.
* `MONGO_PASSWORD`: Mongo user password.
* `MONGO_URL`: Mongo URL string connection.
* `APP_PORT`: **application** port.

### NodeJS

Start Project

```shell
npx create-next-app@latest
```

Install Libs

`cd app`

```shell
npm install saas
```

## Containerize Project

Created a `Dockerfile` to app deployment.

* Docker Steps

1. Build the image (customize to your desired `name:version`)
  
  ```shell
  docker build --no-cache --progress plain -t node-portfolio:latest .
  ```

2. Load the required `ENV` variables using `.env`, based on `.env_sample`

  ```shell
  source .env
  ```

3. UP/Running

  ```shell
  docker run --rm -p 3000:3000 --name portfolio node-portfolio:latest
  ```

* Useful NodeJS Commands

  ```shell
  # Install `package.json` dependencies.
  npm install

  # Uninstall package
  npm un <package>

  # Update package
  npm up <package>

  # List globally installed packages
  npm list -g --depth=0

  # Uninstall global package
  npm -g uninstall <package>

  # List available scripts to run
  npm run

  # Update npm
  npm install -g npm@latest
  ```

> **For more npm commands:**
<https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/>

---
