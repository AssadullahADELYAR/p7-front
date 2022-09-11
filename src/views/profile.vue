<template>
   <div class="container bg-white">
      <div class="user-detail">
         <div class="user-profile-image">
            <img src="../assets/images/user4.jpg" alt="" width="100" />
         </div>
         <p>
            <span class="user-lable">First Name: </span>
            <span class="user-data">Jhon</span>
         </p>
         <p>
            <span class="user-lable">Last Name: </span
            ><span class="user-data">Doe</span>
         </p>
         <p>
            <span class="user-lable">Email: </span
            ><span class="user-data">example@test.com</span>
         </p>

         <button class="btn-small">Delete Account</button>
      </div>
      <post />
   </div>
</template>
<script>
import post from "../components/post.vue";

export default {
   name: "profile",
   components: {
      post,
   },
};
</script>
<style scoped></style>
