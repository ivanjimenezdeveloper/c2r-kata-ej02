import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);

  const aumentarValor = () => {
    setValor(valor >= 10 ? 10 : valor + 1);
  };

  const bajarValor = () => {
    setValor(valor <= 0 ? 0 : valor - 1);
  };

  return (
    <div>
      <button onClick={bajarValor}>-</button>
      <input value={valor} readOnly={true} />
      <button onClick={aumentarValor}>+</button>
    </div>
  );
}

export default App;
