import  { useState } from 'react';
import Modal from "./components/Modal.tsx"; // Укажите правильный путь к компоненту Modal

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const cancel = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            <Modal
                show={showModal}
                onClose={cancel}
                title="Some kinda modal title"
            >
                <p>This is modal content</p>
            </Modal>
        </div>
    );
};

export default App;
