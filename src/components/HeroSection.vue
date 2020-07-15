<template>
  <div class="hero">
    <div class="text">
      <h1>
        Super Dark
        <span class="underline">Theme</span>
      </h1>
      <p>
        The
        <em>darkest</em> dark theme for all websites.
      </p>
      <HeroSectionButtons></HeroSectionButtons>
      <img src="../assets/Hero.png" alt="Super Dark Theme comparison" />
    </div>
    <HeroSectionFooter></HeroSectionFooter>
  </div>
</template>

<script>
import HeroSectionButtons from "./HeroSectionButtons.vue";
import HeroSectionFooter from "./HeroSectionFooter.vue";

export default {
  components: {
    HeroSectionButtons,
    HeroSectionFooter
  }
};
</script>

<style scoped>
.hero {
  height: 100vh;
  position: relative;
}
.text {
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  margin: 0 10px;
}
h1 {
  font-size: 45px;
  font-weight: 700;
  color: rgb(245, 245, 245);
  line-height: 0.9em;
}
h1 span {
  position: relative;
}
h1 span::after {
  content: "";
  width: 80%;
  height: 10px;
  background: rgb(44, 64, 214);
  background: linear-gradient(to right, rgb(44, 64, 214), rgb(202, 38, 204));
  position: absolute;
  right: 0;
  bottom: 5px;
  border-radius: 5px;
  z-index: -1;
}
h1,
p {
  z-index: 0;
}
p {
  color: rgb(233, 233, 233);
  margin-top: 5px;
  font-size: 18px;
  font-weight: 300;
}
p em {
  font-weight: 700;
  font-style: normal;
  color: rgb(163, 163, 163);
}
img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.75;
}
@media only screen and (min-width: 375px) {
  .text {
    margin-left: 30px;
  }
}
@media only screen and (min-width: 680px) {
  img {
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    opacity: 1;
  }
}
@media only screen and (min-width: 768px) {
  .text {
    margin-left: 40px;
  }
}
@media only screen and (min-width: 1024px) {
  .text {
    margin-left: 60px;
  }
}
</style>