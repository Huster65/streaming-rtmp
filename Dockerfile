# Use Node.js base image
FROM node:16

# Install FFmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Copy app files
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Expose ports for RTMP and HTTP
EXPOSE 1935 8000

# Start server
CMD ["node", "server.js"]
