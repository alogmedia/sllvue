<script setup>
import { ref, computed, watch } from "vue";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import rules from "@/data/rules.json";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Reactive state
const distance = ref("");
const selectedTeam = ref("GER/US"); // Default team
const errorMessage = ref("");
const milValue = ref("MIL");
const validTeams = computed(() => rules.rules.map((rule) => rule.name));

// Validation function
const validateDistance = (value) => {
  if (!value || isNaN(value)) {
    errorMessage.value = "Please input a valid number";
    return false;
  } else if (value < 100 || value > 1600) {
    errorMessage.value = "The number must be between 100 and 1600";
    return false;
  }
  errorMessage.value = "";
  return true;
};

// Calculation function
const calculateMil = () => {
  if (!validateDistance(distance.value)) {
    milValue.value = "MIL";
    return;
  }

  const teamRules = rules.rules.find(
    (rule) => rule.name === selectedTeam.value,
  );
  if (!teamRules) {
    errorMessage.value = "Invalid team selected";
    milValue.value = "MIL";
    return;
  }

  const milList = teamRules.mil_list;
  const index = Math.floor(distance.value / 100 - 1);

  if (distance.value % 100 === 0) {
    milValue.value = milList[index];
  } else {
    const diff = milList[index] - milList[index + 1];
    milValue.value = Math.round(
      milList[index] - ((distance.value % 100) * diff) / 100,
    );
  }
};

// Watchers
watch(distance, calculateMil);
watch(selectedTeam, calculateMil);
</script>

<template>
  <div class="video-container">
    <video autoplay muted loop id="background-video">
      <source src="/src/assets/bgmovie.mp4#t=4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <Navbar />
  <section id="community" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <Component class="w-20 h-20 m-auto mb-4" alt="discord icon" />
              Artillery Calculator
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            <div class="calculator flex flex-col items-center space-y-6">
              <div>
                <Label for="team">Select Team</Label>
                <Select v-model="selectedTeam">
                  <SelectTrigger class="w-[180px]">
                    <SelectValue placeholder="Select a team" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="team in validTeams"
                        :key="team"
                        :value="team"
                      >
                        {{ team }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label for="distance">Target Distance</Label>
                <Input
                  id="distance"
                  type="text"
                  v-model="distance"
                  placeholder="Enter distance in meters"
                />
                <p v-if="errorMessage">
                  <Label>{{ errorMessage }}</Label>
                </p>
              </div>

              <div>
                {{ milValue }}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <hr />
  </section>
  <Footer />
</template>

<style scoped>
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
.calculator {
  max-width: 400px;
  margin: 0 auto;
}
.mil-display {
  width: 100%;
  text-align: center;
}
</style>
