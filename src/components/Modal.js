import styled, { css } from "styled-components";
import { useModal, useModalState } from "../context/ModalContext";

const Modal = ({ children }) => {
  const { closeModal } = useModal();
  const { modalOpened } = useModalState();

  const handleBgClick = () => {
    closeModal();
  };

  const handleBoxClick = (e) => {
    e.stopPropagation();
  };

  return (
    <StyledBg onClick={handleBgClick} isOpen={modalOpened}>
      <StyledBox onClick={handleBoxClick}>
        {children}
        <StyledCloseBtn onClick={handleBgClick}>X</StyledCloseBtn>
      </StyledBox>
    </StyledBg>
  );
};

export default Modal;

const StyledBg = styled.div`
  transition: all 0.5s;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000a2;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: fade-in 0.5s;

  ${(p) =>
    !p.isOpen &&
    css`
      animation: fade-out 0.5s;
    `}

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const StyledBox = styled.div`
  width: 180px;
  height: 100px;
  background-color: white;
  position: relative;
`;

const StyledCloseBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(100%, -100%);
  font-size: bold;
  color: white;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #727272;
  }
`;
