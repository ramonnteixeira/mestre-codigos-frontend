<template>
  <section class="card" @click="flip()">
    <img class="card-cover" :src="cover" v-if="!flipped">
    <img class="card-img" :src="`${this.thumbnail.path}/portrait_medium.${this.thumbnail.extension}`" v-if="flipped">
    <label class="card-title" v-if="flipped">{{name}}</label>
  </section>
</template>

<script>

import Cover from '../assets/marvel.svg'

export default {
  name: 'Card',
  data () {
    return {
      flipped: false
    }
  },
  props: {
    personId: Number,
    name: String,
    thumbnail: {}
  },
  methods: {
    flip () {
      if (!this.flipped) {
        this.$emit('flip-card', { personId: this.personId, rollback: this.clear })
        this.flipped = true
      }
    },
    clear () {
      this.flipped = false
    }
  },
  computed: {
    cover () {
      return Cover
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  height: 180px;
  max-height: 180px;
  max-width: 100px;
  min-width: 100px;
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: var(--secondary-color);
  border-radius: 7px;
  padding: 10px;
  row-gap: 7px;
  box-shadow: 2px 5px 15px -2px var(--secondary-color);

  &:hover {
    background-color: var(--primary-color);
  }

  &-title {
    background-color: var(--primary-color);
    color: #fefefe;
    padding: 7px;
    border-radius: 5px;
  }

  &-img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  &-cover {
    width: 100%;
    display: flex;
    align-self: center;
  }

}
</style>
