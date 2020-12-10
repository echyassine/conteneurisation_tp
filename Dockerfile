FROM node
WORKDIR /usr/src/app
COPY package*.json index.html app.js ./
RUN mkdir ./images
COPY images ./images
RUN npm install
EXPOSE 8080
CMD [ "npm", "start" ]