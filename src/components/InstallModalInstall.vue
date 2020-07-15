<template>
  <div class="content">
    <span @click="$emit('change', 'selection')">BACK</span>
    <h2>How to use ({{version}})</h2>
    <ul>
      <li>Click and drag the below link to your bookmark bar.</li>
      <li>Go to website needing darkening.</li>
      <li>Click "Super Dark Theme" in bookmark bar.</li>
      <li>It's that easy!</li>
    </ul>
    <a :href="link" @click.prevent>Super Dark Theme</a>
  </div>
</template>

<script>
export default {
  props: ["link", "version"]
};
</script>

<style scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgb(32, 32, 32);
}
span {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  color: rgb(156, 156, 156);
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: all 300ms;
}
span:hover {
  color: rgb(233, 233, 233);
}
h2,
li {
  color: rgb(255, 255, 255);
}
a {
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 20px;
  padding: 2px;
  background: linear-gradient(
    to right,
    rgb(89, 105, 226),
    rgb(230, 56, 233),
    rgb(89, 105, 226)
  );
  background-size: 200% auto;
  background-position: right center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-decoration: rgb(254, 255, 255) underline;
  transition: all 800ms ease;
}
a:hover {
  background-position: left center;
}
</style>