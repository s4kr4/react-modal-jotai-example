import { ModalModule } from "../stores/modalState";

export function MainContents() {
  const handleClickButton = () => {
    ModalModule.open('Main');
  };

  return (
    <div>
      <h1>Main Contents</h1>
      <button onClick={handleClickButton}>Open Main Modal</button>
    </div>
  );
}
