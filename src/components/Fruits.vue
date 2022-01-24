<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="6" md="3" v-for="item in result" :key="item.id" >
          <b-card tag="article" class="mb-4 card-border" :title="item.name">
            <b-card-text>
              <div><b>Genus</b>: {{ item.genus }}</div>
              <div><b>Name</b>: {{ item.name }}</div>
              <div><b>Family</b>: {{ item.family }}</div>
              <div><b>Order</b>: {{ item.order }}</div>
              <div><b>Nutritions_carbohydrates</b>: {{ item.nutritions.carbohydrates }}</div>
              <div><b>Nutritions_protein</b>: {{ item.nutritions.protein }}</div>
              <div><b>Nutritions_fat</b>: {{ item.nutritions.fat }}</div>
              <div><b>Nutritions_calories</b>: {{ item.nutritions.calories }}</div>
              <div><b>Nutritions_sugar</b>: {{ item.nutritions.sugar }}</div>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Fruits",
  mounted() {
    this.$store.dispatch("getResult");
  },
  computed: {
    result() {
      if(this.$store.state.searchResult.length > 0) {
        return this.$store.state.searchResult;
      }
      else {
        return this.$store.state.apiResult;
      }
    },
  },
};
</script>

<style scoped>
.card-border {
  border: 1px solid #808080;
  border-radius: 10px;
  padding: 5px 0 2px 15px;
}
</style>