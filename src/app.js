import React from 'react'
import ReactDOM from 'react-dom'
import Home from './modules/home'

require('../static/css/homePanel.css');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)