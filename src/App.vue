<script>
import {defineComponent} from "vue";
import FooterContent from "./public/footer-content.component.vue";
import HeaderContent from "./public/header-content.component.vue";
import ProductsList from "./commerce/pages/products-list.component.vue";

export default defineComponent({
  components: {ProductsList, HeaderContent, FooterContent}
})
</script>

<template>
  <header-content/>
  <products-list/>
  <footer-content/>

</template>

<style>
</style>
