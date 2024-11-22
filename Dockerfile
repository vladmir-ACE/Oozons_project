# Étape 1 : Utiliser une image de base pour Node.js
FROM node:20 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le projet et construire pour la production
COPY . .
RUN npm run build

# Étape 2 : Utiliser une image nginx pour servir l'application
FROM nginx:stable

# Copier les fichiers construits vers le dossier nginx par défaut
COPY --from=build /app/dist /usr/share/nginx/html

#configue nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Exposer le port 5173
EXPOSE 5173

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
