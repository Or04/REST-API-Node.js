const connection = require('./db') // First, establish connection and get connection instance
const Tournaments = require('./tournaments')



module.exports={
    async getAllTournaments(req, res, next) {
        const result = await Tournaments.find({})

        if (result) res.json(result) 
        else res.status(404).send('not found')
    },
    async setCanceledTournament(req, res, next) {
        const iD  = req.params.id
        const namE  = req.body.name
        const day = req.body.day
        const cancellationreasoN  = {reason:req.body.cancellationreason}

        console.log(iD);
        console.log(namE);

        const newTournaments=new Tournaments({id:iD,name:namE,day:day,cancellationreason:cancellationreasoN})

        const result = await newTournaments.save()

        if (result) res.json(result) 
        else res.status(404).send('not found')
    },

    async getCancellationTournamentByName(req, res, next) {
        const {name = null,  day= null} = req.params;
        const result = await Tournaments.find({name, day})

        if (result) res.json(result)
        else res.status(404).send('not found')
    },
}




