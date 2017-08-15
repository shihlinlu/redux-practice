import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './modules/counter'
import Counter2 from './modules/counter2'

require('../static/css/homePanel.css');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter2 />
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)