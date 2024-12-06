import "../styles/nav.css"

const Navbar = () =>{
    return (
        <nav className="nav-bar">
            <h1 className="title-nav">ZonaSport</h1>
            <a className="init-nav" href="#init">Inicio</a>
            <a className="products" href="#products">Catalogo</a>
            <a className="about-us" href="#about-us">Acerca de nosotros</a>
        </nav>
    );
};

export default Navbar;