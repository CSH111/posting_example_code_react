import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);
const ModalStateContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);

  const openModal = (compoenent) => {
    setModalOpened(true);
    setModalComponent(compoenent);
  };

  const closeModal = () => {
    setModalOpened(false);
    setTimeout(() => {
      setModalComponent(null);
    }, 400);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <ModalStateContext.Provider value={{ modalOpened }}>
        {children}
        {modalComponent}
      </ModalStateContext.Provider>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
export const useModalState = () => useContext(ModalStateContext);
