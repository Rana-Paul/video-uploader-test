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
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account }) {
      if (token) {
        token.access_token = account?.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.access_token = token.access_token;
      return session;
    },
  },
});
