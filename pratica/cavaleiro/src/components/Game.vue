<template>
  <section class="game">
    <header class="game-subheader" :class="{fixed: hasFixedHeader}">
      <input class="game-player" type="text" maxlength="20" v-model="player" @change="setPlayer($event)">
      <TimeSince :started="gameStart" v-on:stop="gameOver($event)" />
    </header>
    <div class="game-table">

      <Card v-for="(person, index) in cards"
            v-bind:key="index"
            :personId="person.id"
            :name="person.name"
            :thumbnail="person.thumbnail"
            v-on:flip-card="flipCard" />

    </div>
  </section>
</template>

<script>
import Card from './Card'
import TimeSince from './Duration'

export default {
  name: 'Game',
  components: {
    Card,
    TimeSince
  },
  data () {
    const player = localStorage.getItem('marvel.player')
    return {
      hasFixedHeader: false,
      selectedCards: [],
      cards: [],
      gameStart: false,
      player: player || 'Player 1'
    }
  },
  props: {
    msg: String
  },
  methods: {
    flipCard (card) {
      if (!this.gameStart) {
        this.gameStart = true
      }

      this.selectedCards.push(card)
      if (this.selectedCards.length === 2) {
        const card1 = this.selectedCards[0]
        if (card1.personId === card.personId) {
          this.cards.forEach(element => {
            if (element.id === card.personId) {
              element.flipped = true
            }
          })

          if (this.winner) {
            this.gameStart = false
          }
        } else {
          setTimeout(() => {
            card.rollback()
            card1.rollback()
          }, 1500)
        }
        this.selectedCards = []
      }
    },

    setPlayer (event) {
      debugger
      localStorage.setItem('marvel.player', event.target.value)
    },

    async load () {
      const result = await require('../assets/mock_persons.json')
      this.cards = [...result, ...result].sort((a, b) => Math.random() - Math.random())
    },

    updateScroll () {
      const scrollPosition = window.scrollY
      const header = document.getElementById('header')

      this.hasFixedHeader = scrollPosition > header.offsetHeight
    },

    gameOver (time) {
      console.log('game stop: ', time)
    }
  },
  computed: {
    winner () {
      return this.cards.every(e => e.flipped)
    }
  },
  created () {
    this.load()
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game {
  &-table {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    max-width: var(--w-md);
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 30px;
  }

  &-subheader {
    background-color: var(--secondary-color);
    color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row-reverse;
    flex-wrap: wrap;
    gap: 15px;
    letter-spacing: 1px;
    border-top: 2px solid var(--primary-color);
    &.fixed {
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      +.game-table {
        margin-top: 50px;
      }
    }
  }

  &-player {
    border: none;
    padding: 2px 6px;
    width: 95px;
    background-color: var(--primary-color);
    color: var(--white-color);
  }

}
</style>
