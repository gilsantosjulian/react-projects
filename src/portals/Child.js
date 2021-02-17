export default function Child() {
  // El evento de clic en este botón se propagará hasta el padre, 
  // porque no hay un atributo 'onClick' definido.
  return (
    <div className="modal button">
      <button>Click</button>
    </div>
  );
}
