const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "There are green and blue Socks",
      image: "./assets/images/socks_green.jpg",
      URL: "https://www.vuemastery.com/",
      //   inStock: true,
      inventory: 80,
      onSale:true,
    };
  },
});
