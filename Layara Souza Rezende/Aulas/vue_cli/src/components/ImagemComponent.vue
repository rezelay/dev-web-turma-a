<template>

    <div>
<img :width="larguraImg"
v-show="isImgVisivel" :src="urlImg"> <!--para fazer isso aqui funcionar precisa virar um data binding, é só colocar ":"-->

<br/>
<button @click="apareceEsconde(), trocaLabel()">{{ nomeBotao }}</button> <!-- @ é para criar um evento. Um evento pode ter um ou mais de u ouvinte-->
    </div>
</template>

<script>
export default{
    name: "ImagemComponent",
    data(){
        return {
            isImgVisivel:false,
            nomeBotao:"Aparecer",
        }
    },


methods:{
    apareceEsconde(){
        this.isImgVisivel = !this.isImgVisivel;
        this.$emit("visibilidadeImg", this.isImgVisivel); /* Emit é uma lista, pode ter vários componentes */
        },

        trocaLabel(){
        if(this.isImgVisivel){
            this.nomeBotao = "Esconder";
        } else{
            this.nomeBotao = "Aparecer";
        }
    }
    
},
props: {
    urlImg: String,
    larguraImg: Number,
},
emits: ["visibilidadeImg"],
};
</script>


<style scoped>
    img{
        border: 10px solid darkblue;
        border-radius: 16px;
}

</style>