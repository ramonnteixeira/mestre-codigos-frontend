<template>
  <header id="header" class="header">
    <label class="header-title">Jogo da Memória</label>
    <button class="add-button">Instalar</button>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    background-color: var(--secondary-color);
    color: var(--white-color);
    display: flex;
    padding: 0px 15px 0px 15px;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 15px;
    letter-spacing: -2px;

    @media (min-width: 576px) {
      justify-content: space-between;
      flex-flow: row;
    }

    &-title {
      background-color: var(--primary-color);
      font-size: 2.3em;
      text-transform: uppercase;
      font-weight: bold;
      padding: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .add-button {
      @media (max-width: 576px) {
        display: none !important;
      }
      display: none;
      color: var(--white-color);
      background-color:var(--primary-color);
      border: none;
      clip-path: var(--button-clip);
      font-size: 0;
      height: 36px;
      min-width: 40px;
      cursor: pointer;
      background-image: url('../assets/download.svg');
      background-repeat: no-repeat;
      background-size: 20px;
      background-position-x: center;
      background-position-y: center;
      &:hover {
        background-image: unset;
        padding: 10px 30px 10px 30px;
        font-size: 1em;
      }
    }
  }

</style>
