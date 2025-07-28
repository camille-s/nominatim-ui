FROM nginx:1.29.0-alpine
LABEL org.opencontainers.image.source=https://github.com/camille-s/nominatim-ui
LABEL org.opencontainers.image.description="Cobbled together image of Nominatim UI"
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
