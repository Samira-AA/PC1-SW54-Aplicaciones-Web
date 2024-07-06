<script>
import {Products} from "../models/product.entity.js";

export default {
  name:'product-card',
  props: {
    products: {
      type: Products,
      required: true
    }
  }
}
</script>

<template>
  <pv-card class="card bg-gray-400 text-black-alpha-90" style="width: 25rem; overflow: hidden; margin:1rem" aria-label="Product Card">
    <template #header>
      <img alt="Product image" :src="products.image_link" width="100%" />
    </template>
    <template #title>{{products.name}}</template>

    <template #subtitle>
      <p class="text-black-alpha-90" >Brand: {{products.brand}}</p>
      <p class="text-black-alpha-90" >Prince: {{products.price}}</p>
    </template>
    <template #content>
      <p>Link: {{products.product_link}}</p>
      <p>Description: {{products.description}}</p>
      <p>Type: {{products.product_type}}</p>
    </template>
    <template #footer>
      <p>Rating: {{products.rating}}</p>
      <p>Category: {{products.category}}</p>
    </template>
  </pv-card>

</template>

<style>

</style>