const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      { path: "", component: () => import("src/pages/MainPage.vue") },
      { path: "/about", component: () => import("src/pages/AboutPage.vue") },
      {
        path: "/settings",
        component: () => import("src/pages/SettingsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
