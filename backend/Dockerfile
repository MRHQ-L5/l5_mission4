FROM node:18-alpine3.14

WORKDIR /mission4_backend

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]