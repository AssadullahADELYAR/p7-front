<template>
   <div class="container">
      <div class="all-post">
         <!-- Create New Post  -->
         <div class="single-post">
            <div class="new-post">
               <div class="user-image">
                  <img src="../assets/images/user4.jpg" alt="" width="65" />
               </div>
               <button class="create-post">Create a post</button>
            </div>
         </div>
         <!-- display All Posts -->
         <div class="single-post">
            <div class="post-owner">
               <div class="user-image">
                  <img src="../assets/images/user1.jpg" alt="" width="65" />
               </div>
               <p>Callum Blacoe</p>
            </div>
            <div class="post-text">
               <p>
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content
                  here'default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy.
               </p>
            </div>
            <div class="post-image">
               <img src="../assets/images/post1.jpg" alt="" />
            </div>
         </div>
      </div>
      <!-- 2nd post  -->
      <div class="all-post">
         <div class="single-post">
            <div class="post-owner">
               <div class="user-image">
                  <img src="../assets/images/user2.jpg" alt="" width="65" />
               </div>
               <p>Austin Wade</p>
            </div>
            <div class="post-text">
               <p>
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content
                  here'default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy.
               </p>
            </div>
            <div class="post-image">
               <img src="../assets/images/post2.jpg" alt="" />
            </div>
         </div>
      </div>
      <!-- 3rd post  -->
      <div class="all-post">
         <div class="single-post">
            <div class="post-owner">
               <div class="user-image">
                  <img src="../assets/images/user3.jpg" alt="" width="65" />
               </div>
               <p>Mateus Campos</p>
            </div>
            <div class="post-text">
               <p>
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content
                  here'default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy.
               </p>
            </div>
            <div class="post-image">
               <img src="../assets/images/post3.jpg" alt="" />
            </div>
         </div>
      </div>
      <!-- 4th post  -->

      <div class="all-post">
         <div class="single-post">
            <div class="post-owner">
               <div class="user-image">
                  <img src="../assets/images/user1.jpg" alt="" width="65" />
               </div>
               <p>Mateus Campos</p>
            </div>
            <div class="post-text">
               <p>
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content
                  here'default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. as opposed to
                  using 'Content here, content here'default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy.
               </p>
            </div>
            <!-- <div class="post-image">
                  <img src="../assets/images/post3.jpg" alt="" />
               </div> -->
         </div>
      </div>
      <!-- 5th post  -->
      <div class="all-post">
         <div class="single-post">
            <div class="post-owner">
               <div class="user-image">
                  <img src="../assets/images/user3.jpg" alt="" width="65" />
               </div>
               <p>Mateus Campos</p>
            </div>
            <!-- <div class="post-text">
                  <p>
                     Lorem Ipsum is that it has a more-or-less normal
                     distribution of letters, as opposed to using 'Content here,
                     content here'default model text, and a search for 'lorem
                     ipsum' will uncover many web sites still in their infancy.
                  </p>
               </div> -->
            <div class="post-image">
               <img src="../assets/images/post4.jpg" alt="" />
            </div>
         </div>
      </div>
      <!-- 4th post  -->
   </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import post from "@/components/post.vue";
import axios from "axios";

export default {
   name: "home",

   mounted() {
      if (!localStorage.length > 0) {
         this.$router.push("/signup");
      }
   },
};
</script>

<style scoped></style>
