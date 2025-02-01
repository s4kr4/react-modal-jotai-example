import Modal from "react-modal";
import { ModalModule, useModalName } from "../stores/modalState";
import { useEffect, useState } from "react";
import { MainModal } from "./MainModal";
import { SubModal } from "./SubModal";

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 110,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    padding: '30px',
    overflow: 'hidden',
  },
};

export function BaseModal() {
  const modalName = useModalName();
  const [modalContents, setModalContents] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (modalName === null) {
      setModalContents(null);
      return;
    }

    switch (modalName) {
      case 'Main':
        setModalContents(<MainModal />);
        break;
      case 'Sub':
        setModalContents(<SubModal />);
        break;
      default:
        setModalContents(null);
    }
  }, [modalName]);

  const closeModal = () => {
    ModalModule.close();
  };

  return (
    <Modal
      isOpen={!!modalName}
      style={customStyles}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick
    >
      {modalContents}
    </Modal>
  )
}