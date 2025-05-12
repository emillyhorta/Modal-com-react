import { useState } from "react";
import "./App.css";
import Modal from "./components/modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="App">
        <button onClick={() => setOpenModal(true)}>abrir o modal</button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        Conteúdo do modal
      </Modal>
    </>
  );
}

export default App;
