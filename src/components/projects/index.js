import {Component} from 'react'
import Header from '../header'
import './index.css'

class Projects extends Component {
  state = {projects: []}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const url = `https://fluttering-zealous-switch.glitch.me/projects`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({projects: data})
  }

  deletePro = async () => {
    const url = `https://fluttering-zealous-switch.glitch.me/projects/${1}`
    const options = {
      method: 'DELETE',
    }
    await fetch(url, options)
  }

  render() {
    const {projects} = this.state
    const {history} = this.props

    return (
      <div>
        <Header history={history} />
        <ul>
          {projects.map(each => (
            <li key={each.id} className="item-cont">
              <h1>{each.name}</h1>
              <p>{each.description}</p>
              <button type="button" id={each.id} onClick={this.deletePro}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Projects
