FROM node

COPY . /usr/src/nodeapp/graphqltest

RUN npm install  --silent --no-cache

WORKDIR /usr/src/nodeapp/graphqltest

EXPOSE 5555
