import {Component} from 'react'
import Header from '../header'

class Home extends Component {
  render() {
    const {history} = this.props

    return (
      <div>
        <Header history={history} />
        <div className="home">
          <h1>SOFTWARE DEVELOPMENT SERVICES.</h1>
          <p>
            Boost your business performance with premium software development
            services. Our team is proven to be result-driven and well-timed in
            project delivery.
          </p>
        </div>
      </div>
    )
  }
}
export default Home
