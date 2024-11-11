<!-- src/pages/Home.vue -->
<template>
  <div class="video-container">
    <video autoplay muted loop playbackRate="0.8" id="background-video">
      <source src="/src/assets/bgmovie.mp4#t=4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <Navbar />
  <Hero />
  <!--<Features />-->
  <HowItWorks />
  <Team />
  <Community />
  <FAQ />
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
// import Features from "@/components/Features.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import Team from "@/components/Team.vue";
import Community from "@/components/Community.vue";
import FAQ from "@/components/FAQ.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
/* Add the styles for the video background */
#background-video {
  position: fixed;
  background-color: #000;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  opacity: 0.3;
  z-index: -1;
}

@media only screen and (max-width: 600px) {
  #background-video {
    object-fit: cover;
  }
}
</style>
