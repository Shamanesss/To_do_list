<template>
    <div class="input">
<form action="" @submit.prevent="introducirDatos">
    <h2>Crear Tareas</h2>
<input type="text" v-model="tarea" >
</form>
    </div>
</template>

<script setup>
 import { ref } from "vue"
 import { defineEmits } from "vue"
 const tarea = ref("")
const emits = defineEmits (["nuevaTarea"])
function introducirDatos(){
    if(tarea.value !== ''){
        emits("nuevaTarea", tarea)
        tarea.value = ''
    }
}
</script>

<style scoped>

</style>