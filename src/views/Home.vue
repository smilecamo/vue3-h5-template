<template>
  <Button type="primary" @click="handleCount">+{{ homeCount }}</Button>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <p>store中的值：{{ count }}</p>
  <Button @click="goLogin">去往login</Button>
</template>

<script setup>
import { Button } from "vant";
import { ref, computed, onActivated, onDeactivated } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const homeCount = ref(1);
const count = computed(() => {
  return store.getters.count;
});
const handleCount = () => {
  store.commit("setCount", (count.value += 1));
};
const goLogin = () => {
  router.push("/login");
};
onActivated(() => {
  // 被包裹组件被激活的状态下触发
  // 逻辑代码
  console.log("onActivated");
});
onDeactivated(() => {
  // 在被包裹组件停止使用时触发
  // 逻辑代码
  console.log("onDeactivated");
});
</script>

<style lang="scss" scoped></style>
