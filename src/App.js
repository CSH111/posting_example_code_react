import { useState } from "react";
import styled from "styled-components";
import { Modal } from "./components";
import { useModal } from "./context/ModalContext";

function App() {
  const [deleted, setDeleted] = useState(false);
  const { openModal, closeModal } = useModal();

  const handleModalBtnClick = () => {
    openModal(<Modal>일반모달</Modal>);
  };

  const handleDeleteModalBtnClick = () => {
    openModal(
      <Modal>
        <div>아이템을 삭제하시겠습니까?</div>
        <button onClick={handleDeleteBtnClick}>삭제</button>
      </Modal>
    );
  };

  const handleDeleteBtnClick = () => {
    setDeleted(true);
    closeModal();
  };

  const handleRegenBtnClick = () => {
    setDeleted(false);
  };

  return (
    <div id="app">
      <button onClick={handleModalBtnClick}>일반모달 open</button>
      <hr />
      {!deleted && (
        <StyledItem>
          <div>아이템</div>
          <button onClick={handleDeleteModalBtnClick}>삭제모달 open</button>
        </StyledItem>
      )}

      {deleted && <button onClick={handleRegenBtnClick}>아이템 재생성</button>}
    </div>
  );
}

export default App;

const StyledItem = styled.div`
  width: 300px;
  height: 100px;
  background-color: #b6b6b6;
`;
