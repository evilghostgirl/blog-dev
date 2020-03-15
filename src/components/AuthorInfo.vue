<template>
  <div class="card" v-if="author">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      <figure class="image is-48x48">
        <g-link :to="`${author.path}/`">
          <img :src="avatar" :alt="author.title">
        </g-link>
      </figure>
      </div>
      <div class="media-content">
        <p class="title is-4"> <g-link :to="`${author.path}/`"
            class="">
            {{ author.title }}</g-link></p>
        <p class="subtitle is-6">julia.anna.glaszka@interia.pl</p>
      </div>
    </div>

    <div class="content">
        {{$static.metadata.aboutAuthor}}

    </div>
  </div>
    <footer class="card-footer">
    <g-link :to="`${author.path}/`" class="card-footer-item">
            See all posts by {{ author.title }} &rarr;</g-link>
  </footer>
</div>
</template>

<script>
export default {
    props: ['author'],
      computed: {

    avatar () {
      return `/assets/images/${this.author.id}.png`
    },
      }

}
</script>

<style>

</style>
<static-query>
query {
  metadata {
    aboutAuthor
  }
}
</static-query>
