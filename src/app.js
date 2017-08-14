import React from 'react'
import ReactDOM from 'react-dom'

require('../static/css/homePanel.css');

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)