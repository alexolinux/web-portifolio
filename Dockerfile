FROM node:lts-alpine3.19

WORKDIR /usr/src/app
COPY package*.json ./

# Install Node.js dependencies
RUN npm install
COPY . .

EXPOSE 3000
USER node

CMD ["npm", "start"]
