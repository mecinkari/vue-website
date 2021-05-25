<template>
  <div class="cursor-pointer relative">
    <img
      oncontextmenu="return false;"
      :src="src"
      class="rounded-xl shadow w-full h-full md:h-64 object-cover"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: ["src", "alt"],
};
</script>

<style>
</style>