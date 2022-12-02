import { ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";

let uid = 0;
class ToastMessage {
  type: string;
  msg: string;
  duration: number;
  uid: number;
  timer: NodeJS.Timeout;
  constructor(type: string, msg: string, duration: number) {
    this.type = type;
    this.msg = msg;
    this.duration = duration || 3000;
    this.uid = uid++;
    this.timer = setTimeout(() => {
      this.remove();
    }, this.duration);
  }
  remove() {
    useToastStore().remove(this);
  }
}

type toast = {
  type: string;
  duration: number;
  msg: string;
  uid: number;
};

export const useToastStore = defineStore("toast", () => {
  const messages: Ref<toast[]> = ref([]);

  function push(toast: toast) {
    messages.value.push(toast);
  }

  function remove(toast: toast) {
    const toBeRemoved = messages.value.findIndex(
      (t: toast) => t.uid === toast.uid
    );
    messages.value.splice(toBeRemoved, 1);
  }

  function info(message: string, duration: number) {
    const demo = new ToastMessage("info", message, duration);
    push(demo as toast);
  }

  function warn(message: string, duration: number) {
    const demo = new ToastMessage("warn", message, duration);
    push(demo as toast);
  }

  function error(message: string, duration: number) {
    const demo = new ToastMessage("error", message, duration);
    push(demo as toast);
  }

  function success(message: string, duration: number) {
    const demo = new ToastMessage("success", message, duration);
    push(demo as toast);
  }

  return { messages, remove, info, warn, error, success };
});
