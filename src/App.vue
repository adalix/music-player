<template>
  <div class="bg-blackish w-full h-screen flex items-center justify-center overflow-hidden">
    <!-- <MusicList/>  -->
    <!-- <Navbar/>-->
    <MusicPlayer/>
  </div>
</template>

<script>

import MusicPlayer from './components/MusicPlayer.vue';


export default {
    setup() {
        return {};
    },
    components: {  MusicPlayer }
}
</script>
