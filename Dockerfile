FROM nginx:1.29.0-alpine
LABEL org.opencontainers.image.source=https://github.com/camille-s/nominatim-ui
LABEL org.opencontainers.image.description="Cobbled together image of Nominatim UI"
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENV SERVER_IP=172.19.0.3
ENV SERVER_PORT=8123
EXPOSE 80
