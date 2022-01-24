<template>
  <div>
    <div class="center">
      <p>Fruits List</p>
    </div>
    <Search />
    <Fruits />
  </div>
</template>

<script>
// @ is an alias to /src
import Fruits from "@/components/Fruits.vue";
import Search from "@/components/Search.vue";
export default {
  name: "Fruit",
  components: {
    Fruits,
    Search,
  },
};
</script>

<style scoped>
.center {
  text-align: center;
  font-weight: bold;
  padding-top: 10px;
}
</style>