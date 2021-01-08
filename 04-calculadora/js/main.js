const app = Vue.createApp({
    data(){
        return {
            title: "Calculadora",
            n1: 0,
            n2: 0
        }
    },
    computed:{
        suma(){
            return this.n1 + this.n2;
        },
        resta(){
            return this.n1 - this.n2;
        },
        multiplicar(){
            return this.n1 * this.n2;
        },
        dividir(){
            const res = this.n1 / this.n2;
            return res == Infinity || -Infinity || NaN ? 'No Calculable': res;
        },
    }
})