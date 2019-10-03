<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
          align="center"
        ></v-img>
      <br>
      <h2>Tambah Review </h2>   

      <div id="rating">
      <v-rating
        align="right"
        v-model="rating"
        background-color="orange lighten-3"
        color="orange"
        medium
      > 
      </v-rating>
      </div>

      <div align-center id="reviewblog">
        <textarea id="reviewnya" cold="30" rows="3"></textarea>
      </div>

      <div align="right" id="tombol">
      <v-btn  type="submit" color="blue">Kirim</v-btn>
      </div>

      <br>
      <h5>Review List:</h5>

      <div id="apinya">
        {{info}}
      </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/*new Vue({
  el: '#apinya',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://www.getpostman.com/collections/6da59200412894a3c0a5')
      .then(response => (this.info = response))
  } 
})*/
</script>

<style>
textarea{
  width: 100%;
  padding: 8px;
  border: 1px solid hsl(231, 85%, 60%);
  box-shadow: 0 0 0 0.2rem rgba(19, 3, 163, 0.25);
}

blue{
  border: hsl(231, 85%, 60%)
}
</style>