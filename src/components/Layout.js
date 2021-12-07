// Tag 'a'reload a page but we don't want that insted we use Link
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/QA">
            QA
          </Link>
        </div>
      </nav>
      {/* Este Outlet se convierte en nuestros componentes hijos de nuestra ruta padre*/}
      <Outlet />
    </>
  )
}

export default Layout
