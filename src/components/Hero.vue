<script setup lang="ts">
/* import { useColorMode } from "@vueuse/core";
 const mode = useColorMode();
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-vue-next";
 */
import { Button } from "@/components/ui/button";
import ServerDetails from "@/components/ui/server-details/serverDetails.vue";
</script>

<template>
  <section class="container">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-16 mx-auto py-64"
    >
      <div class="text-center space-y-8">
        <div
          class="max-w-screen-md mx-auto text-center text-2xl md:text-4xl font-bold"
        >
          <h1>
            -=Scandinavians Let Loose=-<br />
            <span
              class="text-transparent bg-gradient-to-r from-[#facc15] to-primary bg-clip-text md:text-3xl"
              style="color: #facc15"
              >#1 SLL- Offensive ONLY
            </span>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Join the ranks, soldier! <br />We start every day at 19:00 CET
          <br />Stand with us and fight for victory!
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <!-- <Button class="w-5/6 md:w-1/4 font-bold group/arrow">
            Get Started
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </Button>-->

          <Button
            as-child
            variant="secondary"
            style="color: #fff"
            class="w-5/6 md:w-1/4 font-bold group/arrow"
          >
            <a href="https://discord.gg/scanhll" target="_blank"
              >Join Discord</a
            >
          </Button>
        </div>
        <ServerDetails />
      </div>
      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
