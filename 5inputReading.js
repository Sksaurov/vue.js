const app = Vue.createApp({
    data() {
      return {
        counter:0,
        name:''
      };
    },
    methods:{
        setName(e){
            this.name= e.target.value;
        },
      remove(){
        this.counter--;
      },
      add(){
        this.counter++;
      }
    }
  });
  
  app.mount('#user-goal');
