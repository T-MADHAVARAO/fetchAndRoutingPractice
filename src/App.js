import {Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Services from './components/services'
import Projects from './components/projects'
import Admin from './components/admin'
import Login from './components/login'
import Protected from './components/protected'
import Register from './components/register'
import './App.css'

const App = () => (
  <>
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Switch>
      <Protected exact path="/" component={Home} />
      <Protected exact path="/services" component={Services} />
      <Protected exact path="/projects" component={Projects} />
      <Protected exact path="/admin" component={Admin} />
    </Switch>
  </>
)

export default App
