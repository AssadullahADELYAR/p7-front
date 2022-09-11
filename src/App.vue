<template>
   <div>
      <nav>
         <router-link to="/">Home</router-link> |
         <router-link to="/signup">Sign Up</router-link> |
         <router-link to="/signin">Sign In</router-link> |
         <router-link to="/profile">User Profile</router-link>
      </nav>
      <router-view />
   </div>
</template>

<script>
import axios from "axios";

export default {
   name: "App",
   data() {
      return {};
   },
};
</script>

<style>
@import "./assets/style.css";
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
body {
   background-color: #eeeeee;
   font-family: "Montserrat", sans-serif;
   font-size: 16px;
   font-weight: 300;
}

nav {
   padding: 30px;
}

nav a {
   font-weight: bold;
   color: #2c3e50;
}

nav a.router-link-exact-active {
   color: #42b983;
}
</style>
