<template>
  <div id="app" class="">
    <app-header />
    <main class="main-layout">
      <router-view />
    </main>
  </div>
</template>

<script>
import appHeader from '@/components/App-header.vue';

export default {
  name: 'App',
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  components: {
    appHeader,
  },
};
</script>
