import {Component} from 'react'
import Header from '../header'
import './index.css'

class Admin extends Component {
  state = {serName: '', serDes: '', proName: '', proDes: ''}

  serNameUp = event => {
    this.setState({serName: event.target.value})
  }

  serDesUp = event => {
    this.setState({serDes: event.target.value})
  }

  proNameUp = event => {
    this.setState({proName: event.target.value})
  }

  proDesUp = event => {
    this.setState({proDes: event.target.value})
  }

  addProject = async () => {
    const {proName, proDes} = this.state
    const proData = {
      name: proName,
      description: proDes,
    }

    const url = `https://fluttering-zealous-switch.glitch.me/projects`
    const options = {
      method: 'POST',
      body: JSON.stringify(proData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    const response = await fetch(url, options)
    const val = await response.json()
    console.log(val)
    this.setState({proName: '', proDes: ''})
  }

  addService = async () => {
    const {serName, serDes} = this.state
    const proData = {
      name: serName,
      description: serDes,
    }

    const url = `https://fluttering-zealous-switch.glitch.me/services`
    const options = {
      method: 'POST',
      body: JSON.stringify(proData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    const response = await fetch(url, options)
    const val = await response.json()
    console.log(val)
    this.setState({serName: '', serDes: ''})
  }

  render() {
    const {serName, serDes, proName, proDes} = this.state
    const {history} = this.props
    return (
      <div>
        <Header history={history} />
        <div>
          <div className="add-card">
            <h1>ADD SERVICE</h1>
            <label htmlFor="serName">service name</label>
            <br />
            <input
              id="serName"
              type="text"
              placeholder="name"
              value={serName}
              onChange={this.serNameUp}
            />
            <br />
            <label htmlFor="serDes">description</label>
            <br />
            <textarea
              cols={30}
              rows={12}
              id="serDes"
              type="textArea"
              placeholder="description"
              value={serDes}
              onChange={this.serDesUp}
            />
            <br />
            <button type="button" onClick={this.addService}>
              Add
            </button>
          </div>
          <div className="add-card">
            <h1>ADD PROJECT</h1>
            <label htmlFor="proName">project name</label>
            <br />
            <input
              id="proName"
              type="text"
              placeholder="name"
              value={proName}
              onChange={this.proNameUp}
            />
            <br />
            <label htmlFor="proDes">description</label>
            <br />
            <textarea
              cols={30}
              rows={12}
              id="proDes"
              type="text"
              placeholder="description"
              value={proDes}
              onChange={this.proDesUp}
            />
            <br />
            <button type="button" onClick={this.addProject}>
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin
