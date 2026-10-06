FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --no-audit --no-fund --prefer-offline

COPY . .
RUN npm run build

FROM node:22-alpine AS production

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund --prefer-offline
COPY --from=build /app/dist ./dist

USER node
EXPOSE 3000
CMD ["sh", "-c", "npm run start"]
