<script setup lang="ts"></script>

<template>
  <button :class="$style.button">сброс фильтров</button>
</template>

<style lang="scss" module>
.button {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 25rem;
  height: auto;
  background: #ffffff;
  border: 2px solid $black;
  color: $black;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    background: $orange;
  }
}
</style>
