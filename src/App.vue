<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
/* import Benefits from "./components/Benefits.vue";
 import Features from "./components/Features.vue";
import Services from "./components/Services.vue"; 
import Sponsors from "./components/Sponsors.vue";
import Testimonials from "./components/Testimonials.vue";
import Pricing from "./components/Pricing.vue";
import Contact from "./components/Contact.vue";
*/
import HowItWorks from "./components/HowItWorks.vue";
import Team from "./components/Team.vue";
import Community from "./components/Community.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="video-container">
    <video autoplay muted loop id="background-video">
      <source src="/public/bgmovie.mp4#t=4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <Navbar />
  <Hero />
  <Features />

  <HowItWorks />
  <!-- 
  <Benefits />
  <Services /> 
  <Testimonials />
  <Pricing />
  <Contact />
  -->
  <Team />
  <Community />

  <FAQ />
  <Footer />
</template>

<style>
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
