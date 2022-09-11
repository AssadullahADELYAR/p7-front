<template>
   <div class="form-container">
      <h2>Sign Up</h2>

      <div class="form">
         <form>
            <label for="first-name">First name</label>
            <input
               v-model="this.userInfo.firstName"
               type="text"
               id="first-name"
               placeholder="Enter your first name"
            />
            <label for="last-name">Last name</label>
            <input
               v-model="this.userInfo.lastName"
               type="text"
               id="last-name"
               placeholder="Enter Your last name"
            />
            <label for="email">Email</label>
            <input
               v-model="this.userInfo.email"
               type="email"
               id="email"
               placeholder="example@example.com"
            />
            <label for="password">Password</label>
            <input
               type="password"
               id="password"
               placeholder="Choose a password"
               v-model="this.userInfo.password"
            />
         </form>
         <div class="signup-button">
            <button class="button" type="submit" @click="signup">
               Sign Up
            </button>
            <!-- <input type="submmit" value="Sign Up" /> -->
            <p>
               Already have an account
               <a href="./signin"> Log In</a>
            </p>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import coonectionRoutes from "@/coonectionRoutes";
export default {
   name: "signup",

   data() {
      return {
         userInfo: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
         },
      };
   },
   methods: {
      submit() {
         console.log(this.userInfo);
      },
      async signup() {
         console.log("This is user", this.userInfo);
         var addUser = {
            first_name: this.userInfo.firstName,
            last_name: this.userInfo.lastName,
            email: this.userInfo.email,
            password: this.userInfo.password,
         };
         let result = await axios.post(
            `http://localhost:3000/api/auth/signup`,
            addUser
         );
         if (result.status == 200 && localStorage.length > 0) {
            console.log(result);
            localStorage.setItem("userInfo", JSON.stringify(result.data));
            this.$router.push("/");
         } else {
            console.log("not passed");
         }
         // coonectionRoutes
         //    .create(addUser)
         //    .then((response) => {
         //       //  this.tutorial.id = response.data.id;
         //       // console.log(response.data);
         //       //  this.submitted = true;
         //    })
         //    .catch((e) => {
         //       console.log(e);
         //    });
         // this.$router.push("/");
      },
      //    newUser() {
      //    // this.submitted = false;
      //    this.tutorial = {};
      //  }
   },
   mounted() {
      if (localStorage.length > 0) {
         this.$router.push("/");
      }
   },
};
</script>
<style scoped></style>
