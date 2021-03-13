<template>
  <div>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
      class="home-header"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="ml-0 pl-4 mr-12">
        <router-link to="/">
          <v-img
            src="@/assets/logo.svg"
            alt="Payvolut Logo"
            width="100px"
          ></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      bottom
      temporary
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            v-if="!item.children"
            :key="item.text"
            :to="item.link"
            link
            @click="item.click ? item.click() : false"
          >
            <v-list-item-action>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-else
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.link"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-card min-height="90vh" elevation="1" class="grey lighten-4">
        <v-card-text>
          <router-view />
        </v-card-text>
      </v-card>
      <p class="mt-2 text-center">
        Skype: live:.cid.340c9486f8d75600
        <br />
        Phone: +380 637257796
      </p>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  created() {
    this.items = [
      {
        text: "Home",
        link: "/",
        icon: "mdi-home-outline",
      },
      {
        text: "Bank Transfer",
        icon: "mdi-bank-transfer",
        link: "/bank-transfer",
      },
      {
        text: "Papara Transfer",
        icon: "mdi-alpha-p-circle",
        link: "/papara-transfer",
      },
      {
        text: "BTC Transfer",
        icon: "mdi-currency-btc",
        link: "/btc-transfer",
      },
      {
        text: "Contact",
        link: "/contact",
        icon: "mdi-email-outline",
      },
    ];
  },
};
</script>

<style lang="scss">
.home-header {
  background-image: $gradient;
}
</style>
