Vue.use(VueMaterial)

var App = new Vue({
  el: '#app',
  data() {
    return {
      sortOptions: {
        group: 'sample',
        animation: 150,
      },
      listA: null,
      listB: [
        { meta: {zuid: 3}, content: { item_name: 'Double Jack', image: {data: [{url: "https://q4kk5z5z.media.zestyio.com/03-double-jack.png", zuid: "3-6cdbe79-5o6nu"}] } } }
      ],
			listC: [
        { meta: {zuid: 33}, content: { item_name: 'Jack\'s Spicy Chicken', image: { data: [{url: "https://q4kk5z5z.media.zestyio.com/01_JacksSpicyChicken.png", zuid: "3-6cdbe79-5o6nu"}] } } }
      ],
    };
  },
	mounted () {
		let api_url = `https://q4kk5z5z-dev.preview.zestyio.com/-/instant/6-c649b8-zwc4n1.json`;
    axios
         .get(api_url)
         .then(response => (
             this.listA = response.data.data
         ));


	}
})
