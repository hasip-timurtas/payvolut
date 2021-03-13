import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import nProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("@/HomeLayout"),
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("@/components/Pages/Home/Home")
            },
            {
                path: "bank-transfer",
                name: "BankTransfer",
                component: () => import("@/components/Pages/Home/BankTransfer")
            },
            {
                path: "papara-transfer",
                name: "BankTransfer",
                component: () => import("@/components/Pages/Home/PaparaTransfer")
            },
            {
                path: "btc-transfer",
                name: "BankTransfer",
                component: () => import("@/components/Pages/Home/BtcTransfer")
            },
            {
                path: "contact",
                name: "Contact",
                component: () => import("@/components/Pages/Home/Contact")
            }
        ]
    },
    {
        path: "*",
        name: "NotFound",
        component: () => import("@/components/Pages/NotFound")
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters["auth/loggedIn"]) {
            nProgress.start();
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.afterEach(() => {
    nProgress.done();
});

export default router;
