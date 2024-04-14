import mongoose from 'mongoose'

let isConnected = false

export const connectedToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('Mongo is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)

    isConnected = true
    console.log('connected to mongodb')
  } catch (e) {
    console.log(e)
  }
}

// helpinghands001
// PassWord123
// mongodb+srv://helpinghands001:PassWord123@cluster0.kyu2hvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
