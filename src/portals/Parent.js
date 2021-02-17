import { Component } from 'react'
import Child from './Child'
import Modal from './Modal'

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Esto se activará cuando el botón en el Child sea cliqueado,
    // actualizando el estado de Parent,
    // aunque el botón no sea descendiente directo en el DOM.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}