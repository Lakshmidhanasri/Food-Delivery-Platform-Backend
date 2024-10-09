const { Server } = require("socket.io");

const orderSocket = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("New client connected");

    // Listen for order updates
    socket.on("orderUpdate", (data) => {
      io.emit("orderUpdated", data);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

module.exports = orderSocket;
