<template>
  <cube-button v-on:click="count++" >
      You clicked me {{ count }} times.
  </cube-button>
</template>

<script>
export default {
  name: 'Counter',
  data: function () {
    return {
      count: 0
    }
  }
}
</script>
