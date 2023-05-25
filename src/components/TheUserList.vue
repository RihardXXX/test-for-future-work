<script setup lang="ts">
import { withDefaults, toRefs, ref } from 'vue'
import type { IUser } from '@/interfaces'
import TheUserItem from '@/components/TheUserItem.vue'

interface IProps {
  userList: [] | IUser[]
}

const props = defineProps<IProps>()

const { userList } = toRefs(props)
</script>

<template>
  <ul v-show="userList.length" :class="$style.userList">
    <TheUserItem v-for="user in userList" :key="user.id" :user="user" />
  </ul>
</template>

<style lang="scss" module>
.userList {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 29rem;
  height: auto;
  background: #ffffff;
  border: 2px solid $black;
  color: $black;
  border-radius: 0.8rem;
}
</style>
