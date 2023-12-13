// Create Vue instance
const app = Vue.createApp({
    el: '#app',
    data() {
        return {
            images: [
                './images/caramel-buns.jpg',
                './images/loaf1.jpg',
                './images/kolache.jpg',
                './images/loaf2.jpg',
                './images/donuts.jpg',
                './images/fruit-tart.jpg'
            ],
            currentImageIndex: 0
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentImageIndex];
        }
    },
    methods: {
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;       
        },
        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        }
    }
});

app.mount('#app');