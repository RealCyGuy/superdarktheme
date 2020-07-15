<template>
  <Base v-on="$listeners" :link="$parent.$parent.onlinelink" version="Auto-Updating version" />
</template>

<script>
import Base from "./InstallModalInstall.vue";

export default {
  components: {
    Base
  }
};
</script>

<style>
</style>