<template>
   <div class="form-container">
      <h2>Log In</h2>
      <div class="form">
         <form action="">
            <label for="email">Email</label>
            <input
               v-model="this.email"
               type="email"
               id="email"
               placeholder="example@example.com"
            />
            <label for="password">Password</label>
            <input
               v-model="this.password"
               type="password"
               id="password"
               placeholder="Enter your password"
            />
         </form>
         <div class="login-button">
            <button @click="login" class="button">Sign In</button>
            <button @click="signin" class="button">SignIn</button>
            <p>
               Not registered?
               <a href="./signup"> Sign Up</a>
            </p>
         </div>
      </div>
   </div>
</template>
<style scoped></style>
<script>
import axios from "axios";
import coonectionRoutes from "@/coonectionRoutes";

export default {
   name: "signin",
   data() {
      return {
         email: "",
         password: "",
      };
   },
   methods: {
      async signin() {
         var getUser = {
            email: this.email,
            password: this.password,
         };
         let result = await axios.post(
            `http://localhost:3000/api/auth/signin`,
            getUser
         );
         if (result.status == 200) {
            console.log(result);
            localStorage.setItem("userInfo", JSON.stringify(result.data));
            this.$router.push("/");
         } else {
            console.log("not passed");
         }
      },
   },
   mounted() {
      if (localStorage.length > 0) {
         this.$router.push("/");
      }
   },
};
</script>
