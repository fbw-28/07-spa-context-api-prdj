import React from 'react';
import './Counter.css';
import { connect } from 'react-redux';

class Counter extends React.Component {
  

  incrementX = () => {
      
    this.props.dispatch({type:"INCREMENT_X"})
    
  }

  incrementY = () => {
      
    this.props.dispatch({type:"INCREMENT_Y"})

  }

  

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div className="box">
          <span> B, x = {this.props.countX}</span>
          
          <button onClick={this.incrementY}>Imcrement Y</button><br/>
          <span>C, y = {this.props.countY}</span>
          
          <button onClick={this.incrementX}>Increment X</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
    return {
        countX: state.countX,
        countY: state.countY
        
    }
}

export default connect (mapStateToProps) (Counter);