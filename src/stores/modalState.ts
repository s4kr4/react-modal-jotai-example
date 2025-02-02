import { atom, useAtomValue } from "jotai";
import { store } from ".";

export type ModalName = 'Main' | 'Sub';

const modalName = atom<ModalName | null>(null);

export const useModalName = () => useAtomValue(modalName);

const modalProps = atom<unknown | null>(null);

export const useModalProps = <T>() => {
  return useAtomValue(modalProps) as T;
};

export const ModalModule = {
  open: <T>(name: ModalName, props?: T) => {
    store.set(modalProps, props);
    store.set(modalName, name)
  },
  close: () => store.set(modalName, null),
  clearProps: () => store.set(modalProps, null),
}
