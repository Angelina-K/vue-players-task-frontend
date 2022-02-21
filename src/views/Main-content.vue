<template>
  <main class="main-page flex page-margin">
    <select v-model="viewBy" @change="setViewBy" name="" id="">
      <option value="brand">By brand</option>
      <option value="player">By player</option>
    </select>
    <div class="lists flex space-evenly">
      <list :data="data" :type="'earnings'" />
      <list :data="data" :type="'deposits'" />
    </div>
  </main>
</template>

<script>
import List from '../components/List.vue';
export default {
  name: 'Main-content',
  props: {},
  data() {
    return {
      viewBy: '',
    };
  },
  async created() {
    this.$store.dispatch({ type: 'loadData' });
    this.viewBy = this.$store.getters.currDataViewed;
  },
  methods: {
    setViewBy() {
      this.$store.commit('setViewBy', { viewBy: this.viewBy });
      if (!this.$store.getters.data) {
        this.$store.dispatch({ type: 'loadData' });
      }
    },
  },
  computed: {
    currDataViewed() {
      return this.$store.getters.currDataViewed;
    },
    data() {
      return this.$store.getters.data;
    },
  },
  components: { List },
};
</script>
