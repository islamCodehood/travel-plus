import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '4636b96aab7a7d794d49',
      clientSecret: '878e6805c3ca3d3ea1158c6337474b3dd84d496f',
    }),
    // ...add more providers here
  ],
})