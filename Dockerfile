from node:latest
copy server.js /app/
run node /app/server.js
expose 3500
