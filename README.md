# web-portfolio

------------------------------

Portfolio web

## About This

Portfolio Web. Containerized by using Docker.

## Containerize Project

Created a `Dockerfile` to app deployment.

* Docker Steps

1. Build the image (customize to your desired `name:version`)
  
  ```shell
  docker build --no-cache --progress plain -t web-portfolio:latest .
  ```

2. UP/Running

  ```shell
  docker run --rm -p 80:80 -p 443:443 --name portfolio web-portfolio:latest  
  ```
