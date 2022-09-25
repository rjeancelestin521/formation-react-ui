const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <a className="logo" href="#">RJC Blog</a>
            </div>
            <ul className="liens">
                <li>
                    <a href="#" className="lien">Accueil</a>
                </li>
                <li>
                    <a href="#" className="lien buttonArticle">Créer un article</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;