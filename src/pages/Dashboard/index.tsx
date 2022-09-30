import { Navbar } from "../../components/Navbar";
import Product from "../../components/Product";



export default function Dashboard(props) {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  )
}

