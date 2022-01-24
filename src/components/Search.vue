<template>
  <div class="search-main-style">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="4" md="5">
          <b-form-select
            v-model="selected"
            :options="result"
            size="sm"
          ></b-form-select>
        </b-col>
        <b-col cols="4" md="4">
          Searching enabled for <span class="search-item">{{ selected }}</span>
        </b-col>
        <b-col cols="4" md="1">
          <input
            type="text"
            @input="onChange(selected, $event.target.value)"
            placeholder="Search"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="12">
          <p class="check-search">
              {{getCheckSearch}}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      selected: "carbohydrates"
    };
  },
  computed: {
    result() {
      return this.$store.state.dropDown;
    },
    getCheckSearch() {
        return this.$store.getters.checkSearchResult;
    }
  },
  methods: {
    onChange(selected, value) {
      let searchResult = {
        type: selected,
        searched: value,
      };
      this.$store.dispatch("searchResults", searchResult);
    },
  },
};
</script>

<style scoped>
.search-main-style {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 30px;
}
.search-item {
  font-weight: bold;
}
.check-search {
    padding-top: 20px;
}
</style>