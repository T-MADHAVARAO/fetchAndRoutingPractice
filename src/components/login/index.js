import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  loginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      userName: username,
      password,
    }
    const url = `https://fluttering-zealous-switch.glitch.me/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 200) {
      const {history} = this.props
      history.replace('/')
      Cookies.set('jwt_token', data.jwtToken, {expires: 30})
    } else {
      console.log(data.error)
    }
  }

  render() {
    const {username, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg">
        <form className="form" onSubmit={this.loginForm}>
          <label htmlFor="username">USERNAME</label>
          <br />
          <input
            onChange={this.changeUsername}
            type="text"
            placeholder="username"
            id="username"
            value={username}
          />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input
            value={password}
            onChange={this.changePassword}
            type="password"
            placeholder="password"
            id="password"
          />
          <br />
          <button className="login-btn" type="submit">
            Login
          </button>
          <Link to="/register">
            <button className="login-btn sign-up" type="button">
              SignUp
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Login
