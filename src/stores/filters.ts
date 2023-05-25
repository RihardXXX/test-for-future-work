import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IFilterItem, IFilters, IUser } from '@/interfaces'

export const useFilterStore = defineStore('filters', () => {
  const country = ref<null | IFilterItem[]>(null) // список фильтров стран
  const score = ref<null | IFilterItem[]>(null) // список фильтров баллов
  const users = ref<Array<IUser> | []>([]) // общие пользователи
  const selectedCountry = ref<string>('')
  const selectedScore = ref<string>('')

  // фетч данные фильтра
  const getFilters = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3000/filters')
      const res = await response.json()
      country.value = res.country
      score.value = res.score
    } catch (e) {
      console.log('error getFilters', e)
    }
  }

  // фетч данные пользователей
  const getUsers = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3000/users')
      const res = await response.json()
      users.value = res
    } catch (e) {
      console.log('error getFilters', e)
    }
  }

  const addCountry = (filterName: string): void => {
    if (!filterName) {
      return
    }
    if (selectedCountry.value.includes(filterName)) {
      return
    }
    selectedCountry.value = filterName
  }

  const addScore = (filterName: string): void => {
    if (!filterName) {
      return
    }
    if (selectedScore.value.includes(filterName)) {
      return
    }
    selectedScore.value = filterName
  }

  // отфильтрованные пользователи
  const filteredUsers = computed<[] | IUser[]>(() => {
    if (selectedScore.value || selectedCountry.value) {
      let temp = users.value

      if (selectedCountry.value) {
        temp = temp.filter((user: IUser) => user.country === selectedCountry.value)
      }

      if (selectedScore.value === '>20') {
        temp = temp.filter((user: IUser) => user.score > 20)
      }

      if (selectedScore.value === '<20') {
        temp = temp.filter((user: IUser) => user.score < 20)
      }

      return temp
    }
    // console.log(2)
    return users.value
  })

  const resetFilters = (): void => {
    selectedCountry.value = ''
    selectedScore.value = ''
  }

  return {
    users,
    getFilters,
    getUsers,
    country,
    score,
    filteredUsers,
    selectedCountry,
    selectedScore,
    addScore,
    addCountry,
    resetFilters
  }
})
