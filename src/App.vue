<script setup lang="ts">
import { ref } from "vue";
import { useToastStore } from "./stores/toast";
import TheTaost from "./components/TheTaost.vue";

const toastApi = useToastStore();

const msg = ref("");

const handleClick = () => {
  if (msg.value) {
    toastApi.success(msg.value, 4000);
  }
  msg.value = "sdaf";
};
</script>

<template>
  <main class="p-3">
    <input
      v-model="msg"
      type="text"
      class="h-10 rounded ring-gray-500 ring-2 mb-4 outline-none px-2 transition text-sm focus:ring-green-600"
    />
    <button
      @click.prevent="handleClick"
      class="px-3 py-2 text-gray-800 font-medium bg-green-500 text-xs block rounded uppercase"
    >
      Click me
    </button>
    <TheTaost />
  </main>
</template>

<style scoped></style>
