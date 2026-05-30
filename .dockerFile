# ─── Stage 1: Build ───────────────────────────────────────────
# Use lightweight Node Alpine image as the build environment
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first (so Docker can cache this layer)
COPY package*.json ./

# Install exact dependency versions (faster + safer than npm install)
RUN npm ci

# Copy the rest of your source code into the container
COPY ./ .

# Run Vite build — outputs static files into /app/dist
RUN npm run build

# ─── Stage 2: Serve ───────────────────────────────────────────
# Use lightweight Nginx image to serve the static files
FROM nginx:alpine AS runner

# Copy only the built dist/ folder from Stage 1 into Nginx's serve directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx listens on port 80 by default — tell Docker about it
EXPOSE 80

# Start Nginx in the foreground (daemon off = keeps container alive)
CMD ["nginx", "-g", "daemon off;"]
