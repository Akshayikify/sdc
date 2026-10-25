FROM alpine:latest

WORKDIR /usr/share/nginx/html

RUN apk add --no-cache nginx

COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]