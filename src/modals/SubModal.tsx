import { useModalProps } from "../stores/modalState";

export type SubModalProps = {
  message: string;
};

export function SubModal() {
  const { message } = useModalProps<SubModalProps>();

  return (
    <div>
      <h1>Sub Modal</h1>
      <p>{message}</p>
    </div>
  );
}