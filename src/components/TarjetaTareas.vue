<template>
  <h1 class="titulo">Agenda</h1>
  <div class="contenedor">
    
    <TarjetaInput @nueva-tarea="imprimirTarea" />
    <div class="tareas">
      <div class="tarea" v-for="tarea in tareas" :key="tarea.id">
        <div class="tareaForma">
          <div v-if="!tarea.editar">
            {{ tarea.tarea }}
            <span
              class="material-symbols-outlined update"
              @click="editarTarea(tarea)"
            >
              draw
            </span>
            <span
              class="material-symbols-outlined delete"
              @click="borrarTarea(tarea.id)"
            >
              delete
            </span>
          </div>
          <div v-else>
            <input
              class="editar"
              type="text"
              v-model="tarea.tarea"
              @keydown.enter="actualizarDatos(tarea)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TarjetaInput from "@/components/TarjetaInput.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
const tareas = ref([]);
const imprimirTarea = async () => {
  try {
    //     const response = await axios.get('http://localhost:3000/tareas');
    //"https://myfist-json-serve.herokuapp.com/tareas"
    const response = await axios.get("https://render-json.onrender.com/tareas");
    tareas.value = response.data;
  } catch (error) {
    console.log(error);
  }
};
onMounted(imprimirTarea);

//borrar tarea await axios.del
const borrarTarea = async (id) => {
  try {
    //     await axios.delete(`http://localhost:3000/tareas/${id}`);
    await axios.delete(`https://render-json.onrender.com/tareas/${id}`);
    tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
  } catch (error) {
    console.log(error.value);
  }
};

const editarTarea = (tarea) => {
  tarea.editar = true;
};
const actualizarDatos = async (tarea) => {
  tarea.editar = false;
  try {
    //   await axios.put(`http://localhost:3000/tareas/${tarea.id}`,tarea);
    await axios.put(
      `https://render-json.onrender.com/tareas/${tarea.id}`,
      tarea
    );
  } catch (error) {
    console.log(error.value);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titulo{
 
  padding: 2rem;
  color:#11201fcc;
  font-weight: bold;
}
.contenedor {
margin: 2rem auto 0;
  background-color: #5b9892cc;
  width: 50%;
  border-radius: 10%;
  margin-bottom: 1rem;
}

.tareaForma {
  background-color: #dee2bec2;
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

.delete:hover,
.update:hover {
  cursor: pointer;
}

.update {
  position: absolute;
  right: 2rem;
  top: 0.5rem;
}
.editar {
  background-color: #dee2bee0;
  outline: 0;
  border: 0;
}
</style>
