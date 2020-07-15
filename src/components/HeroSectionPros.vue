<template>
  <section>
    <h2>Why Super Dark Theme?</h2>
    <div class="pros">
      <div class="pro">
        <h3>Save energy</h3>
        <p>Uses less energy, especially on OLED or AMOLED screens.</p>
      </div>
      <div class="pro">
        <h3>Good in dark</h3>
        <p>The darkness reduces eye strain in low light.</p>
      </div>
      <div class="pro">
        <h3>Stop blue light</h3>
        <p>Minimizes the amount of blue light, which is evil.</p>
      </div>
      <div class="pro">
        <h3>Just looks good</h3>
        <p>Makes any website look... ok at best.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background: rgb(59, 61, 65);
}
h2 {
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 30px;
  padding: 20px 10px;
  font-weight: 600;
}
.pros {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.pro {
  background: rgb(49, 49, 49);
  color: rgb(255, 255, 255);
  width: 200px;
  height: 180px;
  padding: 10px;
  margin: 6px;
}
h3 {
  font-size: 25px;
  margin: 5px 0;
  font-weight: 400;
}
p {
  font-weight: 300;
}
</style>