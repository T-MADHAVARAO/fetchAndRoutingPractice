import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const Protected = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default Protected
