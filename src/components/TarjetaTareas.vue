<template>
  <div class="contenedor">
    <!-- <TarjetaInput @nueva-tarea="(tarea) => imprimirTarea()" /> -->
      <input type="text" @click="imprimirTarea" >
<div class="tareas">

</div>
  </div>
</template>

<script setup>


// import TarjetaInput from '@/components/TarjetaInput.vue'
function imprimirTarea(){ 
const lasMacarias = document.querySelector ('input')
const pepito = lasMacarias.value 
const jone = document.querySelector('.tareas')
jone.innerHTML = pepito
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
