import mongoose from "../db/connection.js";

const {Schema, model} = mongoose
const movieSchema = new Schema({
    title: String,
    message: String,
    username: String
})

const Movie = model("Movie", movieSchema)


export default Note