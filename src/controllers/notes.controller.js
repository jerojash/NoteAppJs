import {getConnection} from "./../database/database";

const getNotes = async (req,res)=>{
    try {
        console.log("Me voy a conectar");
        const connection = await getConnection();
        console.log("Conectado");
        const result = await connection.query("Select * from note");
        res.status(200);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

    
}

export const methods= {
    getNotes
};