from node:latest
copy server.js /app/
cmd ["node", "/app/server.js"]
expose 3500
