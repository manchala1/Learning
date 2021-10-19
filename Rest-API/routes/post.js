const express=require("express");
// const { post } = require(".");
const Post=require("../model/post")
const mongoose=require("mongoose");
const fs = require("fs");
const router=express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.name + "-" + Date.now()
      );
    },
  });
  
  const upload = multer({ storage: storage });
  
router.get("/",async function(req,res){
    try{
        const posts=await Post.find();
        console.log(posts)
        return res.json(posts);
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        });
    }
    

});

router.post("/",async function(req,res){
    const {title,body}=req.body;
    // const image={
    //     data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.file.filename)),
    //     contentType: "image/png"
    // }
    const post = await Post.create({
        title,body,img: req.user
    });
    res.json({
        status:"success",
        data:{
            post
        }
    })
});

router.put("/:id",async function(req,res){
    const {title}=req.body;
    console.log("Here->",req.user);
    const post = await Post.findOne({_id:req.params.id});
    console.log(post);

    if(!post){
        return res.status(404).json({
            status:"failed",
            message:"Post Not Found"
        })
    }

    console.log("post-",post.user,req.user);

    if(String(post.user)!==req.user){
        return res.status(403).json({
            status:"failed",
            message:"Forbidden"
        })
    }

    await Post.updateOne({_id:req.params.id },{
        title
    });
    res.json({
        status:"success"
    })
});

router.delete("/:id",async function(req,res){
    
});

module.exports=router;