import {Router} from "express";
import {methods as notesController} from "./../controllers/notes.controller"

const router=Router();

router.get("/",notesController.getNotes);

export default router;