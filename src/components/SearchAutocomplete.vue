<!-- https://www.digitalocean.com/community/tutorials/vuejs-vue-autocomplete-component -->
<template>
  <div class="autocomplete">
    <input v-model="search" @input="onChange" type="text" />
    <ul v-show="isOpen" class="autocomplete-results">
      <li v-for="(result, i) in results" :key="i" class="autocomplete-result">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchAutocomplete",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      search: "",
      results: [],
      isOpen: false,
    };
  },
  methods: {
    filterResults() {
      this.results = this.items.filter(
        (item) => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
    onChange() {
      this.filterResults();
      this.isOpen = true;
    },
  },
};
</script>
