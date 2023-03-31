import express from "express";
import morgan from "morgan";
//Routers
import notesRoutes from "./routes/notes.router";


//Nos va a servir para crear un servidor web
//que se maneje con rutas
const app=express();

//Settings
app.set("port",4000);

//Middlewares 
//Funciones intermedias entre una peticion y una respuesta
app.use(morgan("dev"));

//Routes 
app.use("/api/notes",notesRoutes);


export default app;