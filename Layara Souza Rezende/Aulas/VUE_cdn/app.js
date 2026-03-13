const meuAppVue = {
    data() {//o data sempre retorna outro objeto
        return {
            nome: "Fernando Dias",
            idade: 38,
            inputText: "",
        };
    },
}; //se abrir e fechar chaves o JS já sabe que essa parte é um objeto

Vue.createApp(meuAppVue).mount("#app");