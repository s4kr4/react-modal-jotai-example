import { ModalModule } from "../stores/modalState";

export function MainModal() {
  const handleClickButton = () => {
    ModalModule.close();
  };

  return (
    <div>
      <h1>Main Modal</h1>
      <button onClick={handleClickButton}>OK</button>
    </div>
  );
}