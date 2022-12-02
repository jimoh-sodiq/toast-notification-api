<script setup lang="ts">
import { useToastStore } from "@/stores/toast";

const toastApi = useToastStore();

type toast = {
  type: string;
  duration: number;
  msg: string;
  uid: number;
};

const deleteTaost = (toast: toast) => {
  toastApi.remove(toast);
};
</script>

<template>
  <div class="toast-wrapper">
    <TransitionGroup name="toast">
      <div
        class="toast"
        v-for="toast in toastApi.messages"
        :key="toast.uid"
        :class="toast.type"
      >
        <h5>{{ toast.msg }}</h5>
        <button class="text-black" @click="deleteTaost(toast)">X</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-wrapper {
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 99999999;
}

.toast {
  background-color: rgb(233, 233, 233);
  padding: 8px 16px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 300px;
  margin-top: 8px;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.toast-enter-active {
  transition: transform 0.3s ease-out, opacity 0.2s ease;
}
.toast-leave-active {
  transition: transform 0.3s ease-in, opacity 0.2s ease;
}

h5 {
  font-weight: 400;
  flex: 1 1 auto;
}

button {
  border: 0;
  line-height: 0;
  background-color: transparent;
  padding: 0;
}

.info {
  background-color: #54bbd2;
}

.warn {
  background-color: #e8b309;
}

.success {
  background-color: #2fb246;
}

.error {
  background-color: #d35b09;
}
</style>
