const mongoose  = require('mongoose')

const schema = {
    id: { type: Number, required: true},
    name: { type: String, required: true },
    day: { type: String, required: true },
    cancellationreason: { type: JSON, required:true },    
    
}

const tournaments_schema = new mongoose.Schema(schema)
const tournaments = mongoose.model('Tournaments', tournaments_schema,'contestscanceled')

module.exports = tournaments;