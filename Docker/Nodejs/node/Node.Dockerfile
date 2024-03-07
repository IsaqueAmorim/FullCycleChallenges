FROM node:alpine

WORKDIR /usr/src/app

COPY ./node/ .

RUN npm i

EXPOSE 8080

CMD [ "node","index.js" ]