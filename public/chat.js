// CLIENT
// Make connection to the server
let socket = io.connect("http://localhost:4000") // getting io from the library

// Selectors
let sendButton = document.getElementById("send")
let output = document.getElementById("output")
let handle = document.getElementById("handle")
let message = document.getElementById("message")
let feedback = document.getElementById("feedback")

// Emit socket events on button click
sendButton.addEventListener("click", () => {
    if (message.value && handle.value)
        socket.emit("chat", {
            message: message.value,
            handle: handle.value
        })
})

message.addEventListener("keypress", () => {
    if (handle.value)
        socket.emit("typing", handle.value)
})

// Listen events generated from the server
socket.on("chat", data => {
    output.innerHTML += `<p><strong>${data.handle} : </strong>${data.message}</p>`
    feedback.innerHTML = ''
    message.value = ""
})

socket.on("typing", data => {
    feedback.innerHTML = `<p><em>${data} is typing...</em></p>`
})