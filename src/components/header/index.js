import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="header">
      <div className="logo-cont">
        <img
          src="https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg?size=626&ext=jpg"
          className="logo"
          alt="logo"
        />
        <h1>The Code</h1>
      </div>
      <div>
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/services">
          Services
        </Link>
        <Link className="nav-item" to="/projects">
          Projects
        </Link>
        <Link className="nav-item" to="/admin">
          Admin
        </Link>
        <button type="button" onClick={logOut}>
          LogOut
        </button>
      </div>
    </div>
  )
}

export default Header
