FROM node:alpine
# CREATE APP DIRECTORY
RUN mkdir -p /app
WORKDIR /app
# INSTALL DEPENDENCIES
COPY package*.json ./
RUN npm install
COPY . .
# Exports
EXPOSE 3000
CMD ["npm","start"]