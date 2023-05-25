<script setup lang="ts">
import { useFilterStore } from '@/stores/filters'
import { onMounted, computed } from 'vue'
import TheUserList from '@/components/TheUserList.vue'

const storeFilter = useFilterStore()

onMounted(async () => {
  await storeFilter.getUsers()
})
</script>

<template>
  <main>
    <TheUserList
      v-if="storeFilter.filteredUsers.length"
      :user-list="storeFilter.filteredUsers || []"
    />
    <h3 v-else>пользователи отсутствуют, попробуй сменить фильтры или перезапустить приложение</h3>
  </main>
</template>
