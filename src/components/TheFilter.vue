<script setup lang="ts">
import { withDefaults, toRefs, ref } from 'vue'
import TheFilterItem from '@/components/TheFilterItem.vue'
import { IFilterItem } from '@/interfaces'

interface IProps {
  placeholder?: string
  list: [] | Array<IFilterItem>
  addFilter?: (filterName: string) => void
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: ''
})

const { placeholder, list, addFilter } = toRefs(props)

const isShow = ref<boolean>(false)

const showModal = (): void => {
  isShow.value = true
}

const closeModal = (): void => {
  isShow.value = false
}

const select = (item: IFilterItem) => {
  // console.log(item.title)
  // selectItem.value = item
  isShow.value = false
  addFilter.value(item.value)
}

// const selectItem = ref<null | IFilterItem>(null)
</script>

<template>
  <div :class="$style.wrapper" v-click-outside="closeModal">
    <div v-show="placeholder" :class="$style.placeholder" @click="showModal">
      {{ placeholder }}
    </div>
    <Transition>
      <ul v-show="isShow && list.length" :class="$style.modal">
        <TheFilterItem
          v-for="item in list"
          :key="item.id"
          :title="item.title"
          :class="$style.item"
          @click="select(item)"
        />
      </ul>
    </Transition>
  </div>
</template>

<style lang="scss" module>
.wrapper {
  position: relative;
}

.placeholder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 25rem;
  height: 4rem;
  background: $white;
  border: 2px solid $black-100;
  border-radius: 0.8rem;
  color: $black;
  cursor: pointer;
}

.modal {
  position: absolute;
  top: 4rem;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 25rem;
  height: auto;
  background: #ffffff;
  border: 2px solid $black;
  border-radius: 0.8rem;
  z-index: 11;
  color: $black-100;
}

.item {
  margin-bottom: 0.3rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
