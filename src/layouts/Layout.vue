<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center text-h4">
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab to="/" name="List" icon="list" label="Todo List" />
        <q-route-tab to="/about" name="about" icon="chat" label="About Us" />
        <q-route-tab
          to="/settings"
          name="settings"
          icon="settings"
          label="Settings"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :breakpoint="767"
      :width="250"
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <h1 class="q-px-md">Todo App</h1>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "Home Page",
    icon: "list",
    link: "/",
  },
  {
    title: "About",
    caption: "About Page",
    icon: "chat",
    link: "/about",
  },
  {
    title: "Settings",
    caption: "Settings Page",
    icon: "settings",
    link: "/settings",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },

  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
@media screen and (min-width: 767px) {
  .q-footer {
    display: none;
  }
}
</style>
