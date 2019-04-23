FROM ubuntu:bionic

RUN apt-get update && apt-get dist-upgrade -y
RUN apt-get install nodejs npm -y
RUN npm install --save-dev @babel/core @babel/node

RUN mkdir /code
WORKDIR /code

COPY . /code

RUN npm install

EXPOSE 8080
ENTRYPOINT ["sh", "-c", "tail -f /dev/null"]