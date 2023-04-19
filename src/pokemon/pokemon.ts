import {Schema, model} from 'mongoose'


const PokemonSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    types: {
        required: true,   
        type: Array<String>
    },
    stats: {
     required: true,
     type: Array <String>
    },
    dex: {
        required: true,
        type: Number
    },
    height:{ 
        required: true,
        type: Number
        
    },
    weight: {
        required: true, 
        type: Number
    },
    moves: {
        required: true,
        type: Array<String>
    }
}, {
    timestamps: true
})


export default model('Pokemon', PokemonSchema)
