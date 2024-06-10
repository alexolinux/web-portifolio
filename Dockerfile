FROM nginx:latest

# Remove the default configuration file
RUN rm /etc/nginx/conf.d/default.conf

COPY app/nginx/*.conf /etc/nginx/conf.d/
COPY app/nginx/alexmendes.work.gd.crt /etc/ssl/certs/
COPY app/nginx/alexmendes.work.gd.key /etc/ssl/private/
COPY app/src /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
