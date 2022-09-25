import { Router, Request, Response, NextFunction } from 'express'
import auth from '@moreillon/express_identification_middleware'
import medicines from './medicines'
import dotenv from 'dotenv'
import db from '../db'

dotenv.config()


const {
    IDENTIFICATION_URL
} = process.env

const router = Router()
const auth_options = { url: IDENTIFICATION_URL }


router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send({
        application_name: 'Medicine tracker',
        mongodb: {
            ...db
        }

    })
})


router.use(auth(auth_options))

router.use('/medicines', medicines)

export default router