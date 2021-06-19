module.exports=(sequelize,DataTypes)=>{
    const usuarios=sequelize.define('roles',{
        id_rol:{
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
        },
        nombrerol:DataTypes.STRING,
        descripcion:DataTypes.STRING,
        eliminado:DataTypes.STRING,
        creatat:DataTypes.STRING,
        updateat:DataTypes.STRING,
        usuario_creacion:DataTypes.STRING
    });
    return usuarios;
}