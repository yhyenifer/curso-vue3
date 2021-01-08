const app = Vue.createApp({
data(){
    return {
        title : "Hola mundo",
        user: {
            name: "Yenifer",
            age: "18",
            classValue: "error"
        },
        movies: ['batman', 'spiderman', 'superman'],
        url: "https://google.com",
        image: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg"
    };
},
});
