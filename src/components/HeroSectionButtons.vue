<template>
  <div>
    <a @click="$modal.show('download')" class="install">
      <span class="icon"></span>
      <span class="text">Install</span>
    </a>
    <a href="https://github.com/realcyguy/superdarktheme" class="github">
      <span class="icon"></span>
      <span class="text">Github</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 10px 0;
}
a {
  padding: 12px;
  text-decoration: none;
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
}
a:hover {
  transform: scale(1.1);
}
.icon {
  width: 25px;
  height: 25px;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-color: transparent;
}
.text {
  color: rgb(255, 255, 255);
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
}
.install {
  background: rgb(40, 54, 161);
  background: linear-gradient(
    to right,
    rgb(40, 54, 161),
    rgb(166, 37, 168),
    rgb(40, 54, 161)
  );
  background-size: 200% auto;
  transition: transform 100ms ease, background-position 500ms;
}
.install:hover {
  background-position: right center;
  transition: transform 100ms ease, background-position 900ms;
}
.install .icon {
  background-image: url(../assets/install.svg);
}
.github {
  background: rgb(9, 11, 22);
  transition: transform 100ms ease;
}
.github .icon {
  background-image: url(../assets/github.svg);
}
</style>