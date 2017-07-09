<template>
  <div>
    <navbar></navbar>
    <jumbotron></jumbotron>
    <div class="container" id="app">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn btn-default" href="#" role="button">View details &raquo;</a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn btn-default" href="#" role="button">View details &raquo;</a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p>
            <a class="btn btn-default" href="#" role="button">View details &raquo;</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
      <hr>
      <foot></foot>
    </div>

  </div>
</template>

<script>
import navbar from './components/navbar'
import jumbotron from './components/jumbotron'
import foot from './components/footer'
export default {
  name: 'app',
  components: {
    navbar,
    jumbotron,
    foot
  }
}
</script>

<style>
/* @import './assets/main.css'; */


/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
} */
</style>
