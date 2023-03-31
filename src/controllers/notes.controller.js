import {getConnection} from "./../database/database";

const getNotes = async (req,res)=>{
    console.log("Me voy a conectar");
    const connection = await getConnection();
    console.log("Conectado");
    const result = await connection.query("Select * from note");
    res.json(result);
}

export const methods= {
    getNotes
};