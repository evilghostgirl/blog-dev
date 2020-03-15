<template>
  <Layout>

    <post-header :post="$page.post" />


    <div class="section">
      <div class="columns is-centered">
        <div class="column is-half-tablet">

          <alert v-if="postIsOlderThanOneYear" class="notification is-warning">
            Ten post ma ponad rok, może być nieaktualny.
          </alert>
          <div class="content" v-html="$page.post.content" />
          <post-footer :post="$page.post" :avatar="$page.avatar" />

        </div>
      </div>
    </div>

    <site-footer />
  </Layout>
</template>

<script>
  import moment from 'moment'
  import config from '~/.temp/config.js'
  import Alert from '@/components/Alert'
  import slugify from '@sindresorhus/slugify'
  import SiteFooter from '@/components/Footer'
  import PostHeader from '~/components/PostHeader'
  import PostFooter from '~/components/PostFooter'


  export default {
    components: {
      Alert,
      PostFooter,
      PostHeader,
      SiteFooter,
    },
    methods: {
      description(post, length, clamp) {
        if (post.description) {
          return post.description
        }

        length = length || 280
        clamp = clamp || ' ...'
        let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

        return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
      },
    },
    mounted() {
      import('medium-zoom').then(mediumZoom => {
        this.zoom = mediumZoom.default('.markdown p > img')
      })
    },
    computed: {
      postIsOlderThanOneYear() {
        let postDate = moment(this.$page.post.datetime)
        return moment().diff(postDate, 'years') > 0 ? true : false
      },
    }

  }

</script>

<page-query>
  query Post ($path: String) {
  post (path: $path) {
  title
  path
  slug
  datetime: date (format: "YYYY-MM-DD HH:mm:ss")
  content
  description
  timeToRead
  cover
  author {
  id
  title
  path
  }
  tags {
  id
  title
  path
  }
  }
  }
</page-query>
