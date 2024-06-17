<script setup>
useHead({
  style: [
    {
      innerHTML: `body {background-color: red;color:white;}`,
    },
    {
      // This style block is not being detected by nuxt-security
      // sha256-YbmT6kBs60S2Yscyv1nCra0NbEMaiNhxebjARvL7lI0=
      innerHTML: `
        body {
          background-color: green !important;
        }
      `,
    },
  ],
})
</script>

<template>
  <p>
    Is the body green? (refresh this page to test CSP)
  </p>
</template>
