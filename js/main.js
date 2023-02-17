const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "how are you?",
      indirizziEmail: [],
    };
  },

  methods: {
    stampaEmail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get(" https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.indirizziEmail.push(response.data.response);
            console.log(response);
          });
      }
    },
  },
});
app.mount("#root");
