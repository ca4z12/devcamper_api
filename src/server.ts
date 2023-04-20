import express from 'express'
import * as dotenv from 'dotenv'

const app = express()

dotenv.config({
    path: './config/config.env'
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
})
