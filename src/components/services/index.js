import {Component} from 'react'
import Header from '../header'

class Services extends Component {
  state = {services: []}

  componentDidMount() {
    this.getServices()
  }

  getServices = async () => {
    const url = `https://fluttering-zealous-switch.glitch.me/services`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({services: data})
  }

  deletePro = async () => {
    const url = `https://fluttering-zealous-switch.glitch.me/services/${10}`
    const options = {
      method: 'DELETE',
    }
    await fetch(url, options)
  }

  render() {
    const {services} = this.state
    const {history} = this.props

    return (
      <div>
        <Header history={history} />
        <ul>
          {services.map(each => (
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

export default Services
