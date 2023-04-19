<template>
  <div class="contenedor">
    <TarjetaInput @nueva-tarea="(tarea) => imprimirTarea()" />
    <div class="tareas"></div>
  </div>
</template>

<script setup>
import TarjetaInput from "@/components/TarjetaInput.vue";
function imprimirTarea() {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
