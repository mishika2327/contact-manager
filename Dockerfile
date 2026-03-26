# Build stage for frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend ./

RUN npm run build

# Build stage for backend
FROM node:20-alpine

WORKDIR /app

# Copy backend dependencies
COPY backend/package*.json ./

RUN npm install

# Copy backend code
COPY backend ./

# Copy built frontend to backend (to serve static files)
COPY --from=frontend-builder /app/frontend/build ./public

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/api/contacts', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the server
CMD ["node", "server.js"]
