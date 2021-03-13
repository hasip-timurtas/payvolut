<template>
  <v-card class="ma-auto grey lighten-4" flat width="300px">
    <p class="text-base">Feel free to contact us for any reason.</p>
    <p>
      Skype: live:.cid.340c9486f8d75600 <br />
      Phone: +380 637257796
    </p>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    socials: [
      {
        icon: "mdi-instagram",
        color: "red lighten-3",
        link: "https://www.instagram.com/ldrguide",
      },
    ],
  }),
};
</script>