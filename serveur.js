import express from "express";
import route from "./router.js"

import { connect } from "mongoose";

connect("mongodb+srv://brass:vincent@cluster0.p3jdj1f.mongodb.net/Paris")
    .then(function(){
        console.log("connexion mongo reussi")
    })
    .catch(function(err){
        console.log(new Error(err))
    })


const app = express();
const PORT = 1235;  
app.use(express.json()); 

app.use(route);


app.listen(PORT, function(){
    console.log(`serveur express écoute sur le port ${PORT}`)
})

//Créer un serveur qui écoute sur l'adresse http://localhost:1235