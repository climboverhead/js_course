var React = require('react')  
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


export default class Counter extends React.Component {
    state = { count: this.props.initialCount || 0 }
    sub = () => {
      this.setState({ count: this.state.count - 1 })
    }
    plus = () => {
    this.setState({ count: this.state.count += 1 })
    }
    
    render() {
      return (<Grid container>
        <Grid item xs={3}>
          <Button variant='contained' color='secondary' onClick={this.sub}>-</Button>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            {this.state.count}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' color='primary' onClick={this.plus}>+</Button>
        </Grid>
      </Grid>)
    }
  }