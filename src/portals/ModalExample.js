// Estos dos contenedores son hermanos en el DOM.
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // El elemento del portal se inserta en el árbol DOM después de
    // que se montan los hijos del Modal, lo que significa que los hijos
    // se montarán en un nodo DOM separado. Si un componente hijo
    // requiere estar conectado inmediatamente cuando se monta al árbol del DOM
    // por ejemplo, para medir un nodo DOM, o usar 'autoFocus' en un descendiente,
    // agrega el estado a Modal y renderiza solo a los hijos 
    // cuando se inserta Modal en el árbol DOM.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    console.log('ENTRA A MODAL')
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends React.Component {
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

function Child() {
  // El evento de clic en este botón se propagará hasta el padre, 
  // porque no hay un atributo 'onClick' definido.
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);

export default Modal