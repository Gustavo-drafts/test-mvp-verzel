import { InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next/types";
import { getAllVehicles, Vehicle } from "../../../lib/db";
import { Navbar } from "./components/Navbar";
import Product from "./components/Product";


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const vehicles = await getAllVehicles();

  return {
    props: {}
  }
}

type PostProps = {
  vehicles: Vehicle[]
}

export default function Dashboard({ vehicles }: PostProps, props: InferGetServerSidePropsType<typeof getServerSideProps>) {


  return (
    <>
      <Navbar />
      <Product />
    </>
  )
}