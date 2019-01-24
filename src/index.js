import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'


class App extends React.Component {
  render() {
      return (
          <div><Counter initialCount='5'/></div>
      )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'))
