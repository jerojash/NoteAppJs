import {Router} from "express";

const router=Router();

router.get("/",(request, response) =>{
    response.send("Hola este es mi primer endpoint get")
});

export default router;