const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "how are you?",
    };
  },

  methods: {},
});
app.mount("#root");
