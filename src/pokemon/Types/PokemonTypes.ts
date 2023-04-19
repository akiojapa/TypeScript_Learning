import { ObjectId } from "mongoose";



export interface PokemonType{
    name: String,
    types: Array<String>,
    stats: Array <String>,
    dex: Number, 
    height: Number,
    weight: Number,
    moves: Array<String>
}