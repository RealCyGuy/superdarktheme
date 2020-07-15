<template>
  <div id="app">
    <HeroSection></HeroSection>
    <InstallModal></InstallModal>
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import InstallModal from "./components/InstallModal.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    InstallModal
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: Montserrat, sans-serif;
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
  background: rgb(39, 39, 39);
  background-image: url(./assets/background.png);
  background-size: cover;
  background-position: center;
}
</style>
