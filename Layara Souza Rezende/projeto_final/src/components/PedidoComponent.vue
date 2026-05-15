<template>
  <div>
    <form id="pedido-form">
      <div>
        <p id="nome-hamburguer-content">
          {{ burguer && burguer.nome ? burguer.nome : "-" }}
        </p>
        <img
          id="foto-content"
          alt="burguer"
          :src="burguer && burguer.foto ? burguer.foto : ''"
        />
      </div>
      <div class="inputs" id="form-pedido">
        <label for="nome-cliente">
            <input
              type="text"
              id="nome-cliente"
              name="nome-cliente"
              placeholder="Digite seu Nome"
            />
            Nome
        </label>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'PedidoComponent',
  props: {
    burguer: null,
  },
};

</script>
<style scoped></style>
