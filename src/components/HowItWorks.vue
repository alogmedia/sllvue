<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "1",
    title: "Make a Difference with Every Deployment",
    description:
      "In Hell Let Loose it is important to make a difference with every deployment. We are a community that values teamwork and communication.",
    image: "/src/assets/soldier.svg",
  },
  {
    badgeTitle: "2",
    title: "Create an Impact with Every Choice",
    description:
      "You can have an impact with every choice you make, whether it is choosing the right class, the right weapon, or the right strategy.",
    image: "/src/assets/soldier7.svg",
  },
  {
    badgeTitle: "3",
    title: "Communicate and Coordinate",
    description:
      "Communication is key in Hell Let Loose. We try to communicate when we play together and share tips and tricks to the best of our ability.",
    image: "/src/assets/soldier.svg",
  },
  {
    badgeTitle: "4",
    title: "Learn and Improve",
    description:
      "Wether you are a new player or a veteran, we are always looking for ways to improve our gameplay and our community. Anyone is welcome to join us.",
    image: "/src/assets/soldier7.svg",
  },
];
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        How It Works
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Step-by-Step Process
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[100%]">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 "
          style="border-radius: 50%"
        />
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
