<template>
  <div class="input">
    <form action="" @submit.prevent="postTarea">
      <h2>Crear Tareas</h2>
      <input type="text" v-model="tarea" class="input_propiedades" />
      <p class="error"></p>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, defineEmits } from "vue";
const tarea = ref("");
const error = ref(" ");
const emits = defineEmits(["TareaNueva"]);
const postTarea = async () => {
  try {
    if (tarea.value === "") {
      error.value = "Introduce una tarea";
      return;
    }
    const response = await axios.post(
      "https://localhost:3000/tareas",
      //"https://pildora-render.onrender.com/tareas",
      {
        tarea: tarea.value,
      }
    );
    console.log(response);
    console.log(tarea.value);
    location.reload();
  } catch (error) {
    console.log(error);
    error.value = "Se ha producido un error en la tarea";
  }
  emits("TareaNueva", tarea.value);
};
</script>

<style scoped>
.input {
  margin: 0 auto;
  background-color: #722691d9;
}

.input_propiedades {
  width: 18rem;
  margin-bottom: 0.8rem;
}
</style>
