Pasos para el examen de TLP

1. crear carpeta src
2. posicionar en la carpeta
3. iniciamos node : npm init -y
4. instalamos las dependencias en general : npm i (nombre dependencia)
5. se configura el dev en package.json : "dev": "node -- watch (nombre del archivo)"
6. creamos al archivo (el mismo nombre de "dev")
	- dentro creamos la constante que contenga la dependencia express
	- despues creamos la contante app que contenga y utilice la funcion express
	- creamos una constante para decir que el servisor de posicione en un servidor random o en el puerto x:  const PORT = process.env.PORT || puerto x
	- ponemos app.listen(constante creada en el punto anterior, ()=>{console.log("servidor corriendo en el puerto: ", nombre de la variable(normalmente PORT))})
	- luego ponemos app.use(express.json()) //esto ase que lo que nos resonda el servidor este en formato json
7.creamos otro archivo para la base de datos 
	- dentro creamos un array con objetos 
	- despues lo exprotamos:  module.exports = (nombre de la base de datos)
8. en el primer archivo creamos una contante para que contenga la base de datos que creamos:  const (nombre de la base de datos) = require( ../(nombre del archivo donde este la base de datos))
9. configurar las rutas 

	//RUTAS:

-obtener la base de datos entera:
app.get("/(nombre de la ruta para que se cumpla la funcion), (req,res)=>{
	res.json((nombre de la base de datos))
})


-obtener objeto por id:
app.get("/(nombre de la ruta anterior)/:id", (req,res)=>{
	const variable u = parceInt(req.params.id)
try{
	const variable y = (nombre de la base de datos).find((variable x)=> la misma variable.id ===  id)
if (!variable y){
res.json({mensaje: "tal cosa no encontrada"}) 
}else{
res.json(variable y)
}

}catch(error){
res.json({mensaje:"error al buscar tal cosa"})
}
)



-crear nuevo objeto en el array:

app.post("/nombre de la ruta de quieras",(req,res)=>{
const {conjunto de constantes que se necesiten usar} = req.body

const variable x = nombredeDeLaBasedeDatos.push({nombre de las cosas que hay en tu base da datos en el orden que quieras que se ingresen las cosas})

res.json({mensaje: "se agrego el profesor con exito", variable x})

}
)




-Eliminar un objeto del array por id:

app.delete("/profesores/:id", (req,res)=>{
	const id = parseInt(req.params.id)

	const EncontrarID = (nombredelabasededatos).find((variablex) => variable x.id ===id);
	const AlmacenarID = (nombredelabasededatos).indexOff(EncontrarID)
	const ElimarOjetoID = (nombredelabasededatos).splice(AlmacenarID, 1)

	res.json({mensaje:"profesor eliminado", EliminarProfesor})

})


-editar objeto por ID

app.put("/profesores/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const { nombreProfesor, materia } = req.body;

    const EncontrarProfesor = db.find((profesor) => profesor.id === id);

    EncontrarProfesor.nombreProfesor = nombreProfesor;
    EncontrarProfesor.materia = materia;
    
    console.log(EncontrarProfesor.nombreProfesor);
    console.log(EncontrarProfesor.materia);

    res.json({ message: "Usuario actualizado" });
})
