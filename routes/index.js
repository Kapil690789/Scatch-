const express = require("express");
const { ModuleCacheMap } = require("vite/runtime");
const productModel = require("../models/product-model");
const router = express.Router();
const isloggedin = require("../models/isLoggedIn");
router.get("/",isloggedin, function(req,res){
   let error  = req.flash("error");
    res.render("index",{error, loggedin: false});
});
router.get("/shop", isloggedin, async function(req,res){
 let products =   await productModel.find();
 let sucess =  req.flash("sucess");
  res.render("shop" ,{products,sucess});
});
router.get("/cart", isloggedin, async function(req,res){

 let user =  await userModel.findOne({email: req.user.email})
 .findOne({email: req.user.email})
 .populate("cart");
 const bill =(Number(user.cart[0].price)+20)-Number(user.cart[0].discount)
 
   res.render("cart" ,{user,bill});
 });

router.get("/addtocart/:productid", isloggedin, async function(req,res){
 let user =  await userModel.findOne({email: req.user.email});
 user.cart.push(req.params.productid);
 await user.save();
 req.flash("sucess", "Added to cart");
 res.redirect("/shop");
 });
router.get("/logout", isloggedin, function(req,res){
    res.render("shop");
  });

module.exports = router;