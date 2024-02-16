<template>
  <Navbar />
  <Sidebar />
  
  <router-view/>
</template>

<script>
import Navbar from './components/dashboard/Navbar.vue'
import Sidebar from './components/dashboard/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Homedevs';
    }
  }
}
</script>