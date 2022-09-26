import Express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './db'
import routes from './routes/index'

dotenv.config()


const {
    EXPRESS_PORT = 80,
} = process.env


db.connect()

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(routes)

app.listen(EXPRESS_PORT, () => {
    console.log(`[Express] Listening on port ${EXPRESS_PORT}`)
})


