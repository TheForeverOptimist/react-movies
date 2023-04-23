import express from "express"
import logger from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./controllers/routes/auth.js"

dotenv.config();

const app = express();


//register middleware
app.use(logger('dev'));
app.use(express.json());
app.use(cors()) //allows external requests
app.use(cookieParser())
const port = process.env.PORT || 3001;

//routers and routers
app.get('/*', function(req, res){
    res.send("server is working");
})

app.use("/auth", authRouter)

app.listen(port, function() {
    console.log(`express app running on port ${port}`);
});