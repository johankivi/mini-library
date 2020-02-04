<template>
  <main class="books">
    <book v-for="(book, index) in books" :key="index" :book="book" />    
  </main>
</template>
<script>

import book from '@/components/Book';

export default {
  name: 'bookInfo',
  props: {
    books: Array
  },
  components: {
    book
  }
}
</script>
<style>

.books {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
}

</style>