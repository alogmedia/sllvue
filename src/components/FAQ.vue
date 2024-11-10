<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Can anyone join?",
    answer: "Yes. Enlist on the discord and we will get back to you ASAP.",
    value: "item-1",
  },
  {
    question: "What is the name of your server?",
    answer: "Scandinavian Let Loose",
    value: "item-2",
  },
  {
    question: "How often do you play?",
    answer: "We try to seed the server every day at 19:00pm CET.",
    value: "item-3",
  },
  {
    question: "What role can I play?",
    answer:
      "Anything, whatever you feel like, wether it is Armor Squad or Infantry, we have a spot for you.",
    value: "item-4",
  },
  {
    question: "Do you play competitively or just for fun?",
    answer: "We play for fun, but we do have a competitive team.",
    value: "item-5",
  },
];
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Common Questions
      </h2>
    </div>

    <Accordion type="single" collapsible class="AccordionRoot">
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Still have questions?
      <a href="https://discord.gg/scanhll" class="underline"
        >Join our discord!</a
      >
    </h3>
  </section>
</template>
