import { Router } from 'express'
import content from '../middleware/content.js'
import { register, login, logout, extend, getUser } from '../controllers/users.js'
import * as auth from '../middleware/auth.js'

const router = Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), auth.login, login)
router.delete('/logout', auth.jwt, logout)
router.patch('/extend', auth.jwt, extend)
router.get('/me', auth.jwt, getUser)

export default router
