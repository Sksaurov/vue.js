const app = Vue.createApp({
    data() {
      return {
        courseGoal: 'finish the course',
        vueLink:'https://www.youtube.com/'
      };
    },
    methods:{
     outputGoal(){
        const randomNumber = Math.random();
        if(randomNumber>0.5){
            return 'learn vue';
        }
        else{
            return 'masterVue';
        }
     }
    }
  });
  
  app.mount('#user-goal');
