import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


const {
    MONGODB_URL = 'mongodb://mongo',
    MONGODB_DB = 'medicine_tracker',
} = process.env




const connect = async () => {

    const connection_url = `${MONGODB_URL}/${MONGODB_DB}`
    console.log(`[MongoDB] Attempting connection to ${connection_url}`)

    try {
        await mongoose.connect(connection_url)
        console.log('[Mongoose] Initial connection successful')
    }
    catch (error) {
        console.log('[Mongoose] Initial connection failed')

        setTimeout(connect, 5000)
    }


}




export default {
    connect,
    url: MONGODB_URL,
    db: MONGODB_DB
}