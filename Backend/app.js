const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const { restart } = require('nodemon');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:false}));

//Cabeceras

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Rutas
require('./Server/routes/usuarios')(app);

app.get('*',(req,res)=>{
    res.status(200).send({message:"Bienvenido al Servidor NodeJs"});
})
module.exports=app;
/*
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
                    });
                }else{
                    res.status(200).send({
                        usuario:usuario
                    });
        }
    }else{
            res.status(401).send({message:"Datos Incorrectos"});
        }
    })
    .catch(err=>{
        res.status(500).send({message:"ocurio un error al buscar un usuario"});
    })
}
*/