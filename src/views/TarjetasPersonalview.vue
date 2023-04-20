<template>
  <div class="contenedor">
    <div>
      <InputPersonal @tarea-nueva="agregarTarea" />
      <div class="tareas">
        <div class="tarea" v-for="tarea in tareas" :key="tarea.id">
          <div class="tarea_colores">
            {{ tarea.tarea }}
            <span class="material-symbols-outlined update"> draw </span>
            <span
              class="material-symbols-outlined delete"
              @click="borrarTarea(tarea.id)"
            >
              delete
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputPersonal from "@/components/InputPersonal.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const tareas = ref([]);

const obtenerTareas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/tareas");
    tareas.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(obtenerTareas);

const agregarTarea = async (nuevaTarea) => {
  try {
    if (nuevaTarea === "") {
      return;
    }
    const response = await axios.post("http://localhost:3000/tareas", {
      tarea: nuevaTarea,
    });
    tareas.value.push(response.data);
  } catch (error) {
    console.log(error);
  }
};

//borrar tarea
const borrarTarea = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/tareas/${id}`);
    tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
  } catch (error) {
    console.log(error.value);
  }
};
</script>

<style scoped>
.contenedor {
  margin: 0 auto;
  background-color: #95ada0;
  width: 30rem;
  border-radius: 10%;
  margin-bottom: 1rem;
}
.tarea_colores {
  background-color: #dee2be;
  padding: 0.8rem;
  margin: 0.8rem;
  border-radius: 1%;
  position: relative;
}
.tareas {
  padding: 1rem;
}
.delete {
  position: absolute;
  right: 0.5rem;
  top: 0.6rem;
}
.delete:hover{
  cursor: pointer;
}
.update {
  position: absolute;
  right: 2rem;
  top: 0.5rem;
}
</style>
