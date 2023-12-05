import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connection from './Config/Connection'

const app = express()
const port = process.env.port
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())

connection(DATABASE_URL)

app.use(express.json())


app.listen(port,()=>{
    console.log(`dega ky👀 : ${port}`)
})