<template>
  <div id="app">
    <div class="app-header__container" ref="appHeader">
    <app-header ref="appHeader"/>
    </div>
    <section class="components-container">
      <div class="component-one__container" ref="ComponentOne">
        <component-one @nextSlide="start()"/>
      </div>
      <div class="component-two__container" ref="ComponentTwo">
        <component-two @prevSlide="reverse()" :userTags="tags" :newUser="newUser"/>
      </div>
    </section>
  </div>
</template>

<script>
  import {TimelineMax} from 'gsap'
  import AppHeader from '@/components/AppHeader'
  import ComponentOne from '@/components/ComponentOne'
  import ComponentTwo from '@/components/ComponentTwo'

  export default {
    name: 'app',
    components: {
      AppHeader,
      ComponentOne,
      ComponentTwo
    },
    data () {
      return {
        timelineReady: false
      }
    },
    mounted () {
      this.initTimeline()
    },
    computed: {
      tags () {
        return this.$store.getters.tags
      },
      newUser () {
        return this.$store.getters.newUser
      }
    },
    methods: {
      initTimeline () {

        this.$timeline = new TimelineMax({
          paused: true
        })

        let first = this.$refs.ComponentOne
        let second = this.$refs.ComponentTwo
        let appHeader = this.$refs.appHeader
        console.log(first,second,appHeader)

        this.$timeline
        .to (first, 0.7, {
          x: '-100%',
          opacity: 0
        })

        .to (second, 0.7, {
          x: 0,
          opacity: 1
        },'-=0.7')

        .to (appHeader, 0.7, {
          opacity: 0
        }, '-=0.7')

        this.timelineReady = true;
      },
      start () {
        if (!this.timelineReady) return
          this.$timeline.play()
      },
      reverse () {
        if (!this.timelineReady) return
          this.$timeline.reverse()
      }
    }
  }
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding: 2rem 8rem 0 8rem;
  background: #e0e0d1;
  height: 100vh;
  max-height: 100vh;
  width: 100%;

  .components-container {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    max-height: 80vh;
    border: 1px solid #c2c2a3;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;

    .component-one__container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .component-two__container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(100%);
    }
  }
}

body {
  margin: 0;
}
</style>
