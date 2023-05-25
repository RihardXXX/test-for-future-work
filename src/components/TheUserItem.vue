<script setup lang="ts">
import { toRefs } from 'vue'
import type { IUser } from '@/interfaces'

interface IProps {
  user: IUser | {}
}

const props = defineProps<IProps>()

const { user } = toRefs(props)
</script>

<template>
  <li :class="$style.userWrap">
    <div :class="$style.avatar">
      <img :src="user.avatar" alt="" :class="$style.avatarImg" />
    </div>
    <div :class="$style.info">
      <h3 :class="$style.title">
        имя: {{ user.title }}
      </h3>
      <div :class="$style.desc">
        профессия: {{ user.subtitle }}
      </div>
      <div :class="$style.desc">
        страна: {{ user.country }}
      </div>
      <div :class="$style.desc">
        баллы: {{ user.score }}
      </div>
    </div>
  </li>
</template>

<style lang="scss" module>
.userWrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 9rem;
  background: #ffffff;
  border: 2px solid $black;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.avatar {
  overflow: hidden;
  width: 12rem;
  height: 100%;
  background: #201f21;
  border-radius: 0.6rem;

  .avatarImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  height: 100%;
  width: 100%;
  margin-left: 1rem;
}

.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: $black-100;
}

.desc {
  font-size: 16px;
  line-height: 24px;
  color: $black-100;
}
</style>
