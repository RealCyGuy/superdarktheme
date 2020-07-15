<template>
  <modal name="download" :adaptive="true">
    <component :is="currentTab" @change="currentTab = $event"></component>
  </modal>
</template>

<script>
import selection from "./InstallModalSelection.vue";
import offline from "./InstallModalInstallOffline.vue";
import online from "./InstallModalInstallOnline.vue";
import offlinelink from "raw-loader!../../bookmarklet/superdarktheme.js";

export default {
  data() {
    return {
      currentTab: "selection",
      onlinelink:
        "javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/RealCyGuy/superdarktheme/bookmarklet/superdarktheme.min.js';document.body.appendChild(s)})();",
      offlinelink: "javascript:(function(){" + offlinelink + " })();"
    };
  },
  components: {
    selection,
    offline,
    online
  }
};
</script>

<style scoped>
</style>