import { withAuth } from 'next-auth/middleware'

export default withAuth({
  // quando user estiver logado redirecionar para '/'
  pages: {
    signIn: '/',
    error: '/',
  }
})