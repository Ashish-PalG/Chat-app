const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");

dotenv.config();
const app = express();


app.get('/',(req,res) => {
    res.send("APp is running");
})

app.get('/api/chats', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:kid', (req, res) => {
    console.log(req.params.kid);
     const singleChat = chats.find(c => c._id === req.params.kid);
     res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));