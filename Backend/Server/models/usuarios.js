//var DataTypes = require('sequelize/lib/data-types');
module.exports=(sequelize,DataTypes)=>{
    const usuarios=sequelize.define('usuarios',{
        id_usuario:{
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
        },
        usuario:DataTypes.STRING,
        password_usuario:DataTypes.STRING,
        nombre_usuario:DataTypes.STRING,
        apellido_usuario:DataTypes.STRING,
        puesto_usuario:DataTypes.STRING,
        descripcion_usuario:DataTypes.STRING,
        telefono_usuario:DataTypes.STRING,
        telefono_alternativo_usuario:DataTypes.STRING,
        email_usuario:DataTypes.STRING,
        calle_usuario:DataTypes.STRING,
        ciudad_usuario:DataTypes.STRING,
        cp_usuario:DataTypes.INTEGER,
        estado_usuario:DataTypes.STRING,
        pais_usuario:DataTypes.STRING,
        id_activo:DataTypes.INTEGER,
        eliminado:DataTypes.INTEGER,
    });
    return usuarios;
}