import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
/* import EmailProvider from 'next-auth/providers/email' */

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: '/auth/signin',
  },

  /* theme: {
    logo: 'https://media-exp1.licdn.com/dms/image/C4E03AQF8MvX8VZxOzw/profile-displayphoto-shrink_200_200/0/1606846457796?e=1640822400&v=beta&t=AH8kKZvnTra0ePBoT_aFOGWbOdBG_c_-0iC3-eGY_LE',
    brandColor: '#444444',
    colorScheme: 'auto',
  }, */
})
