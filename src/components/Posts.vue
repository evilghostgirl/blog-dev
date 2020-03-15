<template>
    <div class="columns is-multiline">
          <post-item v-for="edge in posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
</template>

<script>
  import PostItem from '@/components/PostItem'

export default {
   props: ['posts'],
   components: {
     PostItem
   }
   }
</script>

<style>

</style>
