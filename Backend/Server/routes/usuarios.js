const usuarios=require('../controllers').usuarios;
const md_aut = require('../authenticated/authenticated')
module.exports=(app)=>{
    app.post('/api/usuarios',md_aut.auth,usuarios.create);
    app.post('/api/login',usuarios.login);
    app.get('/api/usuarios',md_aut.auth,usuarios.getAll);
}