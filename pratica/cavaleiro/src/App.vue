<template>
  <div id="app">
    <Header />
    <Game />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Header,
    Game
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Marvel&display=swap');

:root {
  --font-family: 'Marvel', sans-serif;
  --w-xs: 576px;
  --w-md: 768px;
  --w-lg: 992px;
  --w-xl: 1200px;
  --primary-color: #EC1D25;
  --secondary-color: #202020;
  --white-color: #fefefe;
  --button-clip: polygon(0% 23%, 8% 1%, 100% 0%, 100% 77%, 89% 100%, 0% 100%);
}

html, body {
  margin: 0;
  height: 100vh;
}

#app {
  font-family: var(--font-family);
  letter-spacing: -1px;
}
</style>
