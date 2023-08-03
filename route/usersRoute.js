import express from "express"
import { formLogin, formRegister, formForgetPassword } from "../controllers/usersController.js";

const router = express.Router();



router.get('/login', formLogin);
router.get('/register', formRegister)
router.get('/forgetPassword', formForgetPassword)
        



export default router;