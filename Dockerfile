FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev=false
COPY . .
RUN npm test

FROM node:18-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
COPY --from=base /app/package*.json ./
RUN npm ci --only=production
COPY --from=base /app/src ./src
USER node
EXPOSE 3000
CMD ["node","src/app.js"]
