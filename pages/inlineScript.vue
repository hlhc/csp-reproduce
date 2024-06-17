<script setup>
useHead({
  script: [
    {
      // sha256-znAEdwHHNHuDziD+SaSsXdgGC1FLBIdbVi8MSiq7DEA=
      innerHTML: `
        console.log('Hello from the useHead!')
        /* Just add some code with line break */
        /*
         * This is a multiline comment
         */
      `,
    },
  ],
})
</script>

<template>
  <p>
    Check console. (refresh this page to test CSP)
  </p>
</template>
