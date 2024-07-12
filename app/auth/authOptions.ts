import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";

// We used the NextAuthOptions to define the type of the authOptions object

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // next-auth change the auth from jwt to server but Oauth doesn't work with google provider so we need to manually chagne the authentication to jwt
  session: {
    strategy: "jwt",
  },
};

export default authOptions;
