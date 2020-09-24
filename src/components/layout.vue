<template>
<div>
    <div style="margin-bottom: 40px">
    <button @click="$router.push('/user')">user</button>

    <button @click="$router.push('/index')">index</button>
    </div>

<router-view v-slot="{ Component }">
  <keep-alive include="index">
    <component :is="Component" />
  </keep-alive>
</router-view>

 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
