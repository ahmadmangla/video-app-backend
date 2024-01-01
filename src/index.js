import dotenv from 'dotenv'
import { app } from './app.js'
import connectDB from './db/db.js'

dotenv.config()

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log('Mongo DB connection failed !!', err)
  })
