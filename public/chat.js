// CLIENT
// Make connection to the server
let socket = io.connect("http://localhost:4000") // getting io from the library

// Selectors
let sendButton = document.getElementById("send")
let output = document.getElementById("output")
let handle = document.getElementById("handle")
let message = document.getElementById("message")

// Emit socket events on button click
sendButton.addEventListener("click", () => {
    socket.emit("chat", {
        message: message.value,
        handle: handle.value
    })
})

// Listen events generated from the server
socket.on("chat", data => {
    output.innerHTML += `<p><strong>${data.handle} : </strong>${data.message}</p>`
})