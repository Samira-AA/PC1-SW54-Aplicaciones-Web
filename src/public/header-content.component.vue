<script>
export default {
  name:'header-content'
}
</script>

<template>
  <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem; background-color:#2c3e50">
    <template #start>
      <div class="flex align-items-center gap-2 ">
        <h1 class="text-white-alpha-90 text-2xl font-bold" aria-label="Site Title">Detallitos Store</h1>
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <pv-button label="WX54" severity="contrast" size="small" aria-label="Class section code" />
      </div>
    </template>
  </pv-toolbar>
</template>

<style>

</style>