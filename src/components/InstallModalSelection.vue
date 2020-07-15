<template>
  <div class="content">
    <h2>Choose a version:</h2>
    <div class="buttons">
      <div>
        <button @click="$emit('change', 'online')">Auto-updating version</button>
        <ul>
          <li>Recommended!</li>
          <li>Automatically updating.</li>
        </ul>
      </div>
      <div>
        <button @click="$emit('change', 'offline')">Offline version</button>
        <ul>
          <li>Works with no wifi.</li>
          <li>Faster without needing to fetch the file.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
h2 {
  color: rgb(255, 255, 255);
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
.buttons div {
  width: 45%;
  height: 100%;
}
button {
  background: rgb(71, 71, 71);
  color: rgb(255, 255, 255);
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 300;
  width: 100%;
  transition: all 300ms;
  border: solid white 2px;
  border-left: none;
  border-right: none;
}
button:hover {
  transform: scale(1.096);
}
ul {
  list-style: none;
  padding: 5px;
}
li {
  text-align: center;
  color: rgb(247, 247, 247);
  font-size: 14px;
  background: rgb(83, 83, 85);
  transition: all 150ms;
  margin: 3px;
  padding: 4px;
}
li:hover {
  transform: scale(1.048);
}
</style>