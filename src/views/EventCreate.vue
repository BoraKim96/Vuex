<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <!--<p>There are {{ catLength }} categories</p>-->
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    // catLength(){
    //   return this.$store.getters.catLength
    // },
     ...mapGetters(['getEventById']),
    ...mapState(['user','categories'])
  }
  
}
</script>

<style>

</style>