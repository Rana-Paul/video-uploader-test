import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
        console.log(token, account);
        
      if (token) {
        token.access_token = account?.access_token;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});
