import {Component} from 'react'
import {Link} from 'react-router-dom'

class Register extends Component {
  state = {username: '', password: '', msg: ''}

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
    const url = `https://fluttering-zealous-switch.glitch.me/register`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.status === 200) {
      this.setState({msg: data.msg})
    } else {
      console.log(data.error)
    }
  }

  render() {
    const {username, password, msg} = this.state
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
            Register
          </button>
          <Link to="/login">
            <button className="login-btn sign-up" type="button">
              Login
            </button>
          </Link>
          <p>{msg}</p>
        </form>
      </div>
    )
  }
}

export default Register
