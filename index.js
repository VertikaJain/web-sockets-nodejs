let express = require("express")
let socket = require("socket.io")

let app = express()
const PORT = 4000
let server = app.listen(PORT, () => console.log("Listening to Server on port 4000..."))

app.use(express.static("public"))

// Socket setup
let io = socket(server)
io.on("connection", socket => {
    console.log("made socket connection with socket ID:", socket.id);
    // on listening to socket emit event by the Server
    socket.on("chat", data => {
        io.sockets.emit("chat", data) // sockets is the collection of all existing sockets
    })

    socket.on("typing", data => {
        socket.broadcast.emit("typing", data) //broadcasting the message to every client except the one who sent it
    })
})