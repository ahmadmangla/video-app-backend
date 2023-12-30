import mongoose from 'mongoose'

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI)

    console.log(
      `Database is connected Successfully and Host: ${connectionInstance.connection.host}`
    )
  } catch (error) {
    console.log('Error: ', error)
    process.exit(1)
  }
}

export default connectDB
