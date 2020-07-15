<template>
  <Base v-on="$listeners" :link="$parent.$parent.offlinelink" version="Offline version" />
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