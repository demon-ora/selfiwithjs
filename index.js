import express from "express";
const app = express();


app.set("view engine","ejs")
app.use(express.json());

app.get("/",(req,res)=>{
res.render("first");
})

app.listen(4000);