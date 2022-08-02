import Categorias from "./components/Categorias";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {
  return(
    <div className="bg-black">
        <Navbar />
        <Header />
        <Categorias />
        <Footer />
    </div>
  )

}


