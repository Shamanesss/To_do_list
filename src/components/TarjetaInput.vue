<template>
  <img src="@/assets/Oops.gif" alt="" v-if="isError" />
  <img src="@/assets/progress.gif" alt="" v-if="isLoading" />
  <div v-if="!isError && !isLoading">
    <div class="input">
<form action="" @submit.prevent="introducirDatos">
    <h2>Crear Tareas</h2>
<input type="text" v-model="tarea" class="inputTareas" >
<p class="error"></p>
</form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { defineEmits } from "vue";
const tarea = ref("");
const error = ref("");
const emits = defineEmits(["nuevaTarea"]);
const introducirDatos = async () => {
  let isError = false;
  let isLoading = true;
  try {
    if (tarea.value === "") {
      error.value = "introduce una tarea";
      return;
    }
    const response = await axios.post("http://localhost:3000/tareas", {
      tarea: tarea.value,
    });
    console.log(response);
  } catch (error) {
    isError = true;
  }
  emits("nuevaTarea", tarea);
  tarea.value = "";
  isLoading = false;
  return isError, isLoading;
};
</script>

<style scoped>

.input {
  margin: 0 auto;
  background-color: #95ada0;
}

.inputTareas {
  width: 18rem;
  margin-bottom: 0.8rem;
}
</style>

