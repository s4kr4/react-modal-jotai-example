import { atom, useAtomValue } from "jotai";
import { store } from ".";

export type ModalName = 'Main' | 'Sub';

const modalName = atom<ModalName | null>(null);

export const useModalName = () => useAtomValue(modalName);

export const ModalModule = {
  open: (name: ModalName) => store.set(modalName, name),
  close: () => store.set(modalName, null),
}
