<template>
  <div class="home">
    <h3 class="text-center">VueNews</h3>
    <section class="callout secondary">
      <h5 class="text-center">Filter by Category</h5>
      <form>
        <div class="row">
          <div class="large-6 columns">
            <select v-model="section">
              <option v-for="section in sections" :value="section">{{ section }}</option>
            </select>
          </div>
          <div class="medium-6 columns">
            <a @click="getPosts(section)" class="button expanded">Retrieve</a>
          </div>
        </div>
      </form>
    </section>
    <h5 class="text-center uppercase" v-if="!loading">{{ title }}</b>
    </h5>
    <div v-if="loading" class="loader">
      <img src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader">
    </div>
    <newslist v-if="!loading" :results="results"></newslist>
  </div>
</template>

<script>
const NYTBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/'
const ApiKey = 'f876f5bd782a48a59cb77ab6a3fb01fa'
const SECTIONS = 'home, arts, automobiles, books, business, fashion, food, health, \
                          insider, magazine, movies, national, nyregion, obituaries, opinion, \
                          politics, realestate, science, sports, sundayreview, technology, \
                          theater, tmagazine, travel, upshot, world'
import newslist from '@/components/NewsList'
export default {
  name: 'home',
  data() {
    return {
      results: [],
      sections: SECTIONS.split(', ').map(a => a.trim()),
      section: 'home',
      loading: true,
      title: ''
    }
  },
  components: {
    newslist
  },
  mounted: function () {
    this.getPosts('home')
  },
  methods: {
    getPosts(section) {
      let url = this.buildUrl(section)
      this.$http.get(url).then((response) => {
        this.loading = false
        this.results = response.data.results
        let title = this.section !== 'home' ? 'Top stories in "' + this.section + '" today' : 'Top stories today'
        this.title = title + '(' + response.data.num_results + ')'
      }).catch((error) => {
        console.log(error)
      })
    },
    buildUrl(url) {
      return NYTBaseUrl + url + '.json?api-key=' + ApiKey
    }
  }
}
</script>

<style>

</style>
