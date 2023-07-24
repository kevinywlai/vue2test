import Vue from "vue";
import VueRouter  from "vue-router";
import HelloWorld from "../components/HelloWorld"
import ByeComponent from "../components/ByeComponent"

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        { path: "/", component: HelloWorld },
        { path: "/bye", component: ByeComponent},
    ]
})