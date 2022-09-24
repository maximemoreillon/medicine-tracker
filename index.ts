import Express from 'express'
import dotenv from 'dotenv'
import db from './db'
import medicine from './routes/medicines'

dotenv.config()


const {
    EXPRESS_PORT = 80
} = process.env


db.connect()

const app = Express()


app.use('/medicines', medicine)

app.listen(EXPRESS_PORT, () => {
    console.log(`[Express] Listening on port ${EXPRESS_PORT}`)
})


