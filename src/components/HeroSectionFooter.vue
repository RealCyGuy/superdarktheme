<template>
  <footer>
    <p>
      Made by
      <a href="https://realcyguy.netlify.app">Cyrus Yip</a>.
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7vh;
}
p {
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 600;
}
a {
  background: rgb(122, 137, 245);
  background: linear-gradient(
    to right,
    rgb(122, 137, 245),
    rgb(235, 46, 238),
    rgb(122, 137, 245)
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 2s linear infinite;
  text-decoration: rgb(177, 184, 231) underline;
}
a:hover {
  animation-play-state: paused;
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>