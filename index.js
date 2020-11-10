let express = require("express")
let app = express()
const PORT = 4000
let server = app.listen(PORT, () => console.log("Listening to SErver on port 4000..."))

app.use(express.static("public"))