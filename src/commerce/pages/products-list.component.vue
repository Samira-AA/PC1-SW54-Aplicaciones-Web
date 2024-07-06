<script>
import ProductCard from "../components/product-card.component.vue";
import {ProductApiService} from "../services/products.js";

export default {
  name:'products-list',
  components: {ProductCard},
  data() {
    return {
      productApi: new ProductApiService(),
      products:[],
    }
  },
  created() {
    this.productApi.getProducts()
        .then(response => this.products = response.data)
        .catch(error => {
          this.products.push("Error: ", error)
        })
  }
}
</script>

<template>
  <h1 class="text-white-alpha-90 text-6xl font-bold text-center" aria-label="Store Products">Store Products</h1>
  <div class="flex justify-content-center flex-wrap" aria-label="Store Products Container">

    <product-card v-for="product in products"
                  :products="product"/>
  </div>
</template>

<style>

</style>