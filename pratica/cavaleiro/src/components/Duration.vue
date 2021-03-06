<template>
  <span>⌛{{String(hours).padStart(2, '0')}}:{{String(minutes).padStart(2, '0')}}:{{String(seconds).padStart(2, '0')}}</span>
</template>

<script>
export default {
  name: 'TimeSince',
  data () {
    return {
      date: null,
      interval: null,
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervals: {
        second: 1000,
        minute: 1000 * 60,
        hour: 1000 * 60 * 60
      }
    }
  },
  props: {
    started: {
      required: true
    }
  },
  watch: {
    started: function (newVal, oldVal) {
      if (newVal) {
        this.start()
      } else {
        this.stop()
      }
    }
  },
  methods: {
    updateDiffs () {
      const timeSince = Math.abs(Date.now() - this.date.getTime())
      let diff = timeSince
      this.hours = Math.floor(diff / this.intervals.hour)
      diff -= this.hours * this.intervals.hour
      this.minutes = Math.floor(diff / this.intervals.minute)
      diff -= this.minutes * this.intervals.minute
      this.seconds = Math.floor(diff / this.intervals.second)
      return timeSince
    },
    start () {
      this.date = new Date()
      this.interval = setInterval(() => {
        this.updateDiffs()
      }, 1000)

      this.updateDiffs()
    },
    stop () {
      clearInterval(this.interval)
      const time = this.updateDiffs()
      this.$emit('stop', time)
    },
    clear () {
      this.hours = 0
      this.minutes = 0
      this.seconds = 0
    }
  }
}
</script>
