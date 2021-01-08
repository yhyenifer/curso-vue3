const app = Vue.createApp({
    data(){
        return {
            title: "Degradado",
            fcolor: "#40ef12",
            scolor: "#EED111",
            orientation : 'right'
        }
    },
    computed:{
        setColor(){
          return  `background: linear-gradient(to ${this.orientation}, ${this.fcolor}, ${this.scolor});`
        }
}
})