const app = Vue.createApp({
    data: () => ({
        title: 'Formularios',
        datos: {
            name: "",
            age: 15,
            langs: [],
            gener: "mujer"
        }
    }),
    methods: {
        handleSubmit(){
            console.log(this.datos);
        }
    }
})