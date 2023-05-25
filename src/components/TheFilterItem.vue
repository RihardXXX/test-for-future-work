<script setup lang="ts">
import { withDefaults, toRefs, ref } from 'vue'

interface IProps {
  title: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: ''
})

const { title } = toRefs(props)
</script>

<template>
  <div v-show="title" :class="$style.placeholder">
    {{ title }}
  </div>
</template>

<style lang="scss" module>
.placeholder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 3rem;
  background: $white;
  border: 2px solid $black-100;
  border-radius: 0.8rem;
  color: $black;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    background: $gray-100;
  }
}
</style>
