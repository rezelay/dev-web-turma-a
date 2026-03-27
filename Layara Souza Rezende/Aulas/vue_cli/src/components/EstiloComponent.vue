<template>
    <div>
<h1>Título do Componente</h1>
<p class="subtitulo">Subtítulo do Componente</p>
    </div>
</template>

<script>
export default{
    name: "EstiloComponent",
};

</script>

<style scoped> /* serve para limitar o escopo do CSS apenas ao componente atual */
h1{
    color: greenyellow;
    }

    .subtitulo{
font-family: 'Times New Roman', Times, serif;
text-align: left;
color: darkred;
    }
</style>