<script setup lang="ts">
import TheFilter from '@/components/TheFilter.vue'
import { onMounted, computed } from 'vue'
import { useFilterStore } from '@/stores/filters'
import { toRaw } from 'vue'
import type { IFilterItem } from '@/interfaces'
import TheButton from '@/components/TheButton.vue'

const storeFilter = useFilterStore()

onMounted(async () => {
  await storeFilter.getFilters()
})

const listCountry = computed<[] | IFilterItem[]>(() => {
  return storeFilter.country ? toRaw(storeFilter.country) : []
})

const listScore = computed<[] | IFilterItem[]>(() => {
  return storeFilter.score ? toRaw(storeFilter.score) : []
})

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Это приложение на Vue3 + Vite + TS + Pinia + FakeServer</h3>
    <br />
    <nav>
      <TheFilter
        :class="$style.filter"
        :placeholder="storeFilter.selectedCountry || 'выберите страну'"
        :list="listCountry"
        :add-filter="storeFilter.addCountry"
      />
      <TheFilter
        :class="$style.filter"
        :placeholder="storeFilter.selectedScore || 'выберите баллы'"
        :list="listScore"
        :add-filter="storeFilter.addScore"
      />
    </nav>
    <TheButton @click="storeFilter.resetFilters()" />
  </div>
</template>

<style lang="scss" module>
.filter {
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
