import express from "express";
import Movie from "../../models/movies.js";
import isLoggedIn from "../../utils/isLoggedIn.js";


const router = express.Router()

router.use(isLoggedIn)

//index
router.get("/", async (req,res) => {})
    try{
        const username = req.payload.username
        const notes = await Movie.find({ username })
        res.json(movies);
    } catch(error){
        res.status(400).json({error})
    }
    //show
    router.get("/", async (req,res) => {})
    try{
        const username = req.payload.username
        const notes = await Movie.find({ username, _id:req.params.id })
        res.json(movie);

    } catch(error){
        res.status(400).json({error})
    }
    
    //create
    router.post("/", async(req, res) => {})
    try{

    } catch(error){
        res.status(400).json({error})
    }
    
    //update
    router.put("/:id", async(req, res) => {})
    try{

    } catch(error){
        res.status(400).json({error})
    }
    
    //delete
    router.put("/:id", async(req, res) => {})
    try{

    } catch(error){
        res.status(400).json({error})
    }


export default router