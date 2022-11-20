import express from "express"
import { getUsers, register, login, logout } from "../controllers/Users.js"
import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js"

const router = express.Router()

router.get('/users', verifyToken, getUsers)
router.post('/users', register)
router.post('/login', login)
router.get('/token', refreshToken)
router.delete('/logout', logout)

export default router