const usuarios=require('../models').usuarios;
const jwt = require('../services/jwt')

function create(req,res){
    usuarios.create(req.body)
    .then(usuarios=>{
        res.status(200).send({usuarios})
    })
    .catch(err=>{
        res.status(500).send({err});
        console.log(err);
    })
}
function login(req,res){
    usuarios.findOne({
        where:{
            usuario:req.body.usuario,
            password_usuario:req.body.password_usuario
        }
    })
    .then(usuario=>{
        if(usuario){
            if(req.body.token){
                res.status(200).send({
                token:jwt.createToken(usuario)
             });}else{
                res.status(200).send({
                    usuario:usuario
                 });
            }
            
        }
        else{
            res.status(401).send({message:"Datos Incorrectos"});
        }
    })
    .catch(err=>{
        res.status(500).send({message:"ocurio un error al buscar un usuario"});
    })
}

function getAll(req,res){
    usuarios.findAll()
    .then(usuarios=>{
        res.status(200).send({usuarios});
    })
    .catch(err=>{
        res.status(500).send({message:"Ocurrio un error al buscar todos los usuarios"});
    })
}
module.exports={
    create,
    login,
    getAll
}
