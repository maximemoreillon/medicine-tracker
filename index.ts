import Express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import auth from '@moreillon/express_identification_middleware'
import db from './db'
import medicines from './routes/medicines'
import { Request, Response, NextFunction } from 'express'

dotenv.config()


const {
    EXPRESS_PORT = 80,
    IDENTIFICATION_URL
} = process.env

const auth_options = { url: IDENTIFICATION_URL }

db.connect()

const app = Express()

app.use(cors())
app.use(Express.json())

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send({
        application_name: 'Medicine tracker',
        mongodb: {
            ...db
        }
        
    })
})

app.use(auth(auth_options))
app.use('/medicines', medicines)

app.listen(EXPRESS_PORT, () => {
    console.log(`[Express] Listening on port ${EXPRESS_PORT}`)
})


