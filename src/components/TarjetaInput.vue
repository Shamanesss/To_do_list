<template>
    <div class="input">
<form action="" @submit.prevent="introducirDatos">
    <h2>Crear Tareas</h2>
<input type="text" v-model="tarea" >
<p class="error"></p>
</form>
    </div>
</template>

<script setup>
 import axios from "axios";
import { ref } from "vue"
 import { defineEmits } from "vue"
 const tarea = ref("")
 const error= ref("")
const emits = defineEmits (["nuevaTarea"])
const introducirDatos=async()=>{
    try{
    if(tarea.value === ''){
        error.value ="introduce una tarea";
        return;
    }
    const response = await axios.post("http://localhost:3000/tareas", {
        tarea: tarea.value,
    });
    console.log(response);
}   catch (error){
    console.log(error)
    error.value= "Se ha producido un error"
}
        emits("nuevaTarea", tarea)
        tarea.value = ''
    
}
</script>

<style scoped>

</style>