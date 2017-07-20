<template>
  <div>
    <sp v-if="isMobile"/>
    <pc v-else />
  </div>
</template>

<script>
import pc from '~/components/pages/pc/index.vue'
import sp from '~/components/pages/sp/index.vue'

export default {
  components: {
    pc,
    sp
  },
  asyncData ({ isMobile }) {
    return { isMobile }
  },
  head () {
    console.log(this)
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
