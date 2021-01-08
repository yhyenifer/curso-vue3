const app = Vue.createApp({
    data(){
        return{
            title: "ContadorApp",
            count: 0,
        }
    },
    methods:{
        add(){
           // this.count++;
           this.count += 1;
        },
        subtract(){
            this.count--;
        },
        modCount(instruccion = "add", limit = 1){
            if(instruccion === "add") this.count += limit;
            else this.count -= limit;
        }
    }
})