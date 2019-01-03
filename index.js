const express = require('express')
const ctrl = require('./controller')
const asyncwrapper = require('./async.wrapper')


const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/Tournaments', asyncwrapper(ctrl.getAllTournaments))
app.post('/Tournaments/:id', asyncwrapper(ctrl.setCanceledTournament))
app.get('/Tournaments/:name/:day', asyncwrapper(ctrl.getCancellationTournamentByName))

app.all('*',(req,res)=>{

    res.send('not fonud');
})


app.listen(port, () => console.log("Express server ready for requests on:", port))



