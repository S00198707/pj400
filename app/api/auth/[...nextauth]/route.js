import clientPromise from "@/app/libs/mongoConnect"
import bcrypt from "bcrypt";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/app/models/User";
import mongoose from "mongoose";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";


export const authOptions = {
  secret: process.env.SECRET,
adapter: MongoDBAdapter(clientPromise),
providers:[
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          id: 'credentials',
          credentials: {
          email: { label: "Email", type: "email", placeholder: "test@gmail.com"},
          password: { label: "Password", type: "password" },
          county: { label: "County", type: "county" }
        },
        async authorize(credentials, req) {
          const email = credentials?.email;
          const password= credentials?.password;
        
          mongoose.connect(process.env.MONGO_URL);
          const user = await User.findOne({email});
          const passwordOk = user && bcrypt.compareSync(password, user.password);
       
          if (passwordOk){
            return user;
          }
          return null
            
        }
        
      })

],
};

const handler = NextAuth(authOptions);
  
export { handler as GET, handler as POST }