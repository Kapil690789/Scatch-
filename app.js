// const express = require("express");
const express = require('express');
// const usersRouter = require("./routes/usersRouter");


const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const ownersRouter = require("./routes/ownersRouter").default;
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const flash = require("connect-flash");

require("dotenv").config();
const db = require("./config/mongoose-connection");
const isLoggedIn = require('./middlewares/isLoggedIn');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(
    expressSession({
        resave : false,
        saveUninitialized: false,
        secret : process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
app.use("/",indexRouter);
app.use("/owners",ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{error});
});

router.get("/shop",isLoggedIn, (req,res)=>{
    res.render("shop");
});



app.listen(3000, () => {
    console.log(" 3000");
});
