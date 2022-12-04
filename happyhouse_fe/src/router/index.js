import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "@/views/AppMain.vue";
import AppApt from "@/views/AppApt.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/kakao/login",
    name: "kakaoLogin",
    component: () => import("@/views/KakaoAuth"),
  },
  {
    path: "/apt",
    name: "apt",
    component: AppApt,
  },

  {
    path: "/area",
    name: "area",
    component: () => import("@/views/AppArea"),
  },
  {
    path: "/board",
    name: "board",
    redirect: "/board/list",
    component: () => import("@/views/AppBoard"),
    children: [
      {
        path: "list",
        name: "boardlist",
        component: () => import("@/components/board/BoardList"),
      },
      {
        path: "write",
        name: "boardwrite",
        component: () => import("@/components/board/BoardWrite"),
      },
      {
        path: "view/:articleno",
        name: "boardview",
        component: () => import("@/components/board/BoardView"),
      },
      {
        path: "update/:articleno",
        name: "boardupdate",
        component: () => import("@/components/board/BoardUpdate"),
      },
    ],
  },
  {
    path: "/qna",
    name: "qna",
    redirect: "/qna/list",
    component: () => import("@/views/AppQna"),
    children: [
      {
        path: "list",
        name: "qnalist",
        component: () => import("@/components/qna/QnaList"),
      },
      {
        path: "write",
        name: "qnawrite",
        component: () => import("@/components/qna/QnaWrite"),
      },
      {
        path: "view/:articleno",
        name: "qnaview",
        component: () => import("@/components/qna/QnaView"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/login",
    component: () => import("@/views/AppUser"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/user/UserLogin"),
      },
      {
        path: "join",
        name: "join",
        component: () => import("@/components/user/UserJoin"),
      },
      {
        path: "find",
        name: "find",
        component: () => import("@/components/user/UserFind"),
      },
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/AppMypage"),
    redirect: "/mypage/info",
    children: [
      {
        path: "info",
        name: "userinfo",
        component: () => import("@/components/userpage/UserPage"),
      },

      {
        path: "update",
        name: "userupdate",
        component: () => import("@/components/userpage/UserUpdate"),
      },

      {
        path: "delete",
        name: "userdelete",
        component: () => import("@/components/userpage/UserDelete"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
