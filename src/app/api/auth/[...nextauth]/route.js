import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

import User from '@/app/models/user'
import { connectedToDB } from '../../../../../utils/database'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session
    },

    async signIn({ account, profile, user, credentials }) {
      try {
        await connectedToDB()
        const checkEmail = await User.findAll({ email: user.email })

        if (checkEmail.length == 0) {
          await User.insertMany({ name: user.name, email: user.email })
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
})

export { handler as GET, handler as POST }
