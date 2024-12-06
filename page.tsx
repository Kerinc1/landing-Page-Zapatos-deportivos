import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar"
import Init from "../components/init"
import Products from "../components/products";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div>
    <Navbar/>
    <Init/>
    <Products/>
    <Footer/>
    </div>
  );
}
