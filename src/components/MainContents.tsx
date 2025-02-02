import { SubModalProps } from "../modals/SubModal";
import { ModalModule } from "../stores/modalState";

export function MainContents() {
  const handleClickMainButton = () => {
    ModalModule.open('Main');
  };

  const handleClickSubButton = () => {
    ModalModule.open<SubModalProps>('Sub', { message: 'Hello, Sub Modal!' });
  };

  return (
    <div>
      <h1>Main Contents</h1>
      <button onClick={handleClickMainButton}>Open Main Modal</button>
      <button onClick={handleClickSubButton}>Open Sub Modal</button>
    </div>
  );
}
