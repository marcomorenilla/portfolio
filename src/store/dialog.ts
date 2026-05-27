import { atom } from "nanostores";

export const $state = atom({
  isOpen: false,
  type: "idle",
  message: "",
});

export function $openSuccessDialog() {
  $state.set({
    isOpen: true,
    type: "success",
    message: "Mensaje enviado con éxito!",
  });
}

export function $closeDialog() {
  $state.set({ isOpen: false, type: "idle", message: "" });
}

export function $openErrorDIalog(message: string) {
  $state.set({ isOpen: true, type: "error", message: message });
}
