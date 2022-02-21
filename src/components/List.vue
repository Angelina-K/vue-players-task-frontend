<template>
  <div class="list-container">
    <h2>Total {{ type }}: ${{ calcTotal() }}</h2>
    <ul class="clean-list list page-margin">
      <li v-for="(item, idx) in data" :key="item[type] + '' + idx">
        <span>{{ item.key }}: </span>
        <span> $ {{ item[type] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: { data: Array, type: String },
  data() {
    return {};
  },
  created() {},
  methods: {
    calcTotal() {
      const data = this.data;
      if (data) {
        const total = data.reduce((acc, curr) => {
          return acc + parseInt(curr[this.type]);
        }, 0);
        return total;
      }
    },
  },
  computed: {},
  components: {},
};
</script>
