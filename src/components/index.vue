<template>
  <span>{{count}}</span>
  <button @click="count++">+1</button>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      count: 0
    }
  }
}
</script>
