# descaramos la imagen oficial de node
FROM node:18

# establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json al contenedor
# COPY package*.json ./

# Instala las dependencias de la aplicación
# RUN npm install --production

# Copiar los archivos de la aplicacion al contenedor
COPY . .

# Exponer el puerto dentro del contenedor por que corre la aaplcacion
EXPOSE 8080 

#  define el comando para inicar la aplicacio
CMD ["node", "index.js"]

#  docker run -p 3000:8080 testnode