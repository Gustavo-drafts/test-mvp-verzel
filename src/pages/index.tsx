import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { Login } from "./Login";


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/Dashboard',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}


export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  return (
    <>
      <Login />
    </>
  )
}