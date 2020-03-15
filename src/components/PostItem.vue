<template>
  <div class="column is-half-tablet is-one-third-desktop m-t-md m-b-md p-l-md p-r-md">
    <!-- Card start -->
    <div class="card" style="height: 100%">

      <div class="card-image" v-if="post.cover">
        <g-link :to="`${post.path}/`">
          <g-image :src="post.cover" alt="No photo"/>
        </g-link>
      </div>
      <div class="card-image" v-else>
        <g-link :to="`${post.path}/`">
          <g-image src="@/assets/images/no-image.jpg" alt="No photo"/>
        </g-link>
      </div>
      <div class="card-content">

        <h5 class="title is-size-4 has-padding-bottom-10 ">
          <g-link class="has-text-black-ter" :to="`${post.path}/`">{{post.title}}</g-link>
        </h5>

        <div class="subtitle is-size-6 has-text-grey	">


          <!-- tags -->
          <span v-if="post.tags && post.tags.length > 0">
            <g-link :to="`${post.tags[0].path}/`" class="">
              #{{ titleCase(post.tags[0].title) }}
            </g-link>
          </span>
          <!-- dot -->

        </div>

        <p class="has-text-grey	 is-size-6" v-html="excerpt(post, 180, ' ...')"></p>

      </div>
      <div class=" post-info-box">
          <div class="is-pulled-left has-padding-right-10">
            <figure class="image is-48x48" v-if="post.author">
              <g-image class="is-rounded" src="@/assets/images/Julia.png"  alt="X"/>
            </figure>
          </div>

          <div class="content is-pulled-left">
            <span v-if="post.author">
              by
              <g-link :to="`${post.author.path}/`" class="has-text-grey-darker">
                {{ titleCase(post.author.title) }}
              </g-link>
              <br>
            </span>
            <div class="has-text-grey-light">
              <time :datetime="post.datetime" class="">{{ formatPublishDate(post.datetime) }}</time>
              <span v-if="post.author || (post.tags && post.tags.length > 0)"> · </span>
              <span>{{ post.timeToRead }} min</span>
            </div>

          </div>
      </div>
      <footer class="card-footer">
        <g-link :to="`${post.path}/`" class="card-footer-item">Read More</g-link>
      </footer>
      <!-- Card end -->
    </div>
  </div>
</template>
<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
  }

  .post-info-box {
    margin-top: auto;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
  }

</style>
<script>
  import moment from 'moment'

  export default {
    props: ['post'],
    computed: {
      formattedPublishDate() {
        return moment(this.post.datetime).format('DD MMMM, YYYY');
      }

    },
    methods: {
      formatPublishDate(date) {
        return moment(date).format('DD MMMM, YYYY');
      },
      excerpt(post, length, clamp) {
        if (post.excerpt) {
          return post.excerpt
        }

        length = length || 180
        clamp = clamp || ' ...'
        let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

        return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
      },
      titleCase(str) {
        return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
      }
    },
  }

</script>
