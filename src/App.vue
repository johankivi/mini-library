<template>
  <div id="app">
    <transition name="fade">
      <overlay v-if="showOverlay" :selectedBook="activeBook" />
    </transition>
    <library :books="books"/>
  </div>
</template>
<script>
import books from '@/assets/childrensbooks.json';
import library from '@/views/Books';
import overlay from '@/views/BookInfo';

export default {
  name: 'App',
  components: {
    library,
    overlay
  },
  data(){
    return {
      showOverlay: false,
      activeBook: Object
    }
  },
  computed: {
    books() {
      return books.books; 
    }
  },
  watch: {
    activeBook(){
      this.showOverlay = !this.showOverlay;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
