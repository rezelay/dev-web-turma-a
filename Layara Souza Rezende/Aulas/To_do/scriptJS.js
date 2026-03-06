window.onload = function () {
    const input = this.document.getElementById("tarefaInput");
    const btnAdicionar = this.document.getElementById("btnAdicionar");
    const lista = this.document.getElementById("listaTarefas");

    btnAdicionar.addEventListener("click", () => {
        //recupera o valor do campo input text
        const texto = input.value.trim();

        //Criar um elemento da minha lista de tarefas
        const li = this.document.createElement("li");

        //Adicionar o valor de input text no meu item da lista
        li.textContent = texto;

        //Adicionando o click para riscar a tarefa
        li.addEventListener("Click", () => {
            li.classList.toggle("concluida");
        }); //toggle é um método próprio do JS

        //Criação do Botão de Excluir
        const btnRemover = this.document.createElement("button");
        btnRemover.textContent = "x";
        //Adicionando a classe de estilo do botão fechar
        btnRemover.classList.add("fechar");
        btnRemover.addEventListener("click", () => {
            li.remove();
        });

        //Adicionando o botão X na LI (item)
        li.appendChild(btnRemover);

        //Adiciona o item na lista para ser apresentado
        lista.appendChild(li);

        //Limpa o valor após a adição. Não remove o que está escrito, meio que "mascara" o que está escrito
        input.value = "";



    });
};