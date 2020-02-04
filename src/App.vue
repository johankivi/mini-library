<template>
  <div id="app">
    <router-view :books="books" />
  </div>
</template>
<script>
import books from '@/assets/childrensbooks.json';

export default {
  name: 'Book',
  computed: {
    books() {
      return books.books; 
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');

body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;
}



</style>
