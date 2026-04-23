FROM php:8.4-apache

ENV APACHE_DOCUMENT_ROOT /var/www/html/public

# Csak a legszükségesebb csomagok a Laravel futtatásához
RUN apt-get update && apt-get install -y \
    git zip unzip libonig-dev libxml2-dev libzip-dev

RUN docker-php-ext-install mbstring bcmath xml zip

RUN a2enmod rewrite

# Apache beállítása a /public mappára
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf \
    /etc/apache2/conf-available/*.conf

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

# Optimalizált telepítés (no-dev production környezetben jobb lenne, de iskolai projekthez így is jó)
RUN composer install --no-interaction --optimize-autoloader

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache