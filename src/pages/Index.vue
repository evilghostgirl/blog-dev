<template>
  <Layout class="bg-white">
    <nav class="navbar">
      <div class="container has-text-centered has-padding-bottom-10 has-padding-top-15">
        <a class="navbar-item " href="/">Julia Glaszka</a>
      </div>
    </nav>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <g-link to="/" class="title is-spaced ">Autodydaktycznie</g-link>

            <p class="subtitle has-padding-top-15">Blog o moich samodzielnych zmaganiach z nauką z różnych dziedzin IT. </p>
            <g-link to="/author/Julia" class="button is-primary is-rounded " >O mnie</g-link>
          </div>
          <div class="column has-text-right has-padding-top-60-mobile"><g-image src="~/assets/images/Julia.png" alt=""/></div>
        </div>
      </div>
    </section>
  <div class="container">
    <hr>
  </div>


    <main class="section">
      <section class="container">
        <h2 class="title has-text-centered">Najnowsze Posty</h2>
        <!-- all posts -->
        <posts :posts="$page.posts" class="has-margin-top-20"/>
        <!-- all posts end -->
      </section>
    </main>

       <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />


    <div class="section">
      <div class="container">
        <site-footer class="has-padding-top-10 has-padding-bottom-10" />
      </div>
     </div>
  </Layout>
</template>

<script>
  import SiteFooter from '@/components/Footer'
  import PostItem from '@/components/PostItem'
  import Pagination from '@/components/Pagination'
  import Posts from '@/components/Posts'


  export default {
    components: {
      PostItem,
      Pagination,
      SiteFooter,
      Posts
    },
    metaInfo() {
      return {
        title: this.$static.metadata.siteName,

      }
    }
  }

</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            id
            title
            timeToRead
            datetime: date (format: "YYYY-MM-DD HH:mm:ss")
            content
            excerpt
            description
            path
            cover
            tags {
              id
              title
              path
            }
            author {
              id
              title
              path
          }
        }
      }
    }
  }
</page-query>

<static-query>
  query {
    metadata {
    siteName
    siteUrl
    siteDescription
    }
  }
</static-query>
