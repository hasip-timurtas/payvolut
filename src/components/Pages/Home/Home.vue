<template>
  <div class="text-center">
    <v-card
      flat
      max-width="800px"
      class="mx-auto pt-10 grey lighten-4 text-center"
    >
      <h1 class="text-center text-3xl">PayVolut Secured Payment Solutions</h1>
    </v-card>
    <p class="pt-5 text-base text-center">
      As <strong>PayVolut</strong>, We provide the best and secure payment
      methods for your bussines with 5 years experience. <br />
    </p>
    <p class="panel text-xl">Here are the screenshots of our panel</p>
    <div class="container mx-auto">
      <div class="medias">
        <div>
          <img @click="openImg" src="img/py2.png" />
        </div>
        <div>
          <img @click="openImg" src="img/py1.png" />
        </div>
        <div>
          <img @click="openImg" src="img/py3.png" />
        </div>
      </div>
    </div>
    <p class="pt-10">
      For customer usages you can check how the user can add deposit via <br />
      <v-btn to="/bank-transfer" plain
        ><v-icon class="mr-2">mdi-bank-transfer</v-icon> Bank Transfer
      </v-btn>
      or
      <v-btn to="/papara-transfer" plain
        ><v-icon class="mr-2">mdi-alpha-p-circle</v-icon>Papara Transfer
      </v-btn>
      or
      <v-btn to="/btc-transfer" plain
        ><v-icon class="mr-2">mdi-currency-btc</v-icon>BTC Transfer
      </v-btn>
    </p>
  </div>
</template>
<script>
export default {
  name: "home",
  methods: {
    openImg(element) {
      var url = element.target.getAttribute("src");
      window.open(url, "Image");
    },
  },
};
</script>

<style lang="scss" scoped>
.home-text {
  line-height: 40px;
}

ul {
  list-style-position: inside;
  font-size: 16px;

  @include tablet-to {
    font-size: 13px;
  }
}

h1 {
  @include tablet-to {
    font-size: 25px;
  }
}

.medias {
  display: flex;
  gap: 10px;
}

.medias div {
  width: 50%;
  margin: auto;
}

.medias img {
  width: 100%;
  transition: 0.25s;
  cursor: pointer;
  margin-top: 20px;
}
</style>


