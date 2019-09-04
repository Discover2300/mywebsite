<template>
  <div>
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheFooter,
  }
};
</script>

<style>
</style>
