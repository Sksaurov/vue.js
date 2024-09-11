const app = Vue.createApp({
    data() {
      return {
        counter:0,
      };
    },
    methods:{
      remove(){
        this.counter--;
      },
      add(){
        this.counter++;
      }
    }
  });
  
  app.mount('#user-goal');
