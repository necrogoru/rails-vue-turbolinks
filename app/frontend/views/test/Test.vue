<template>
  <div id="test-test">
    <h1>This is a test with Vue Component</h1>
    <p>say {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "TestTest",
  data: () => ({
    message: 'Hello!'
  })
}
</script>

<style lang="scss" scoped>
  p {
    color: rgb(108, 138, 15)
  }
</style>
