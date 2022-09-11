<template>
   <!-- display All Posts -->
   <div class="single-post">
      <div class="post-owner">
         <div class="user-image">
            <img :src="this.post.userImage" alt="" width="65" />
         </div>
         <p>Callum Blacoe</p>
      </div>
      <div class="post-text">
         <p>{{ post.postText }}</p>
         <button @click="getAlluser">Click</button>
      </div>
      <div class="post-image">
         <img :src="post.postImage" alt="" />
         <!-- {{ post.postImage }} -->
      </div>
   </div>
</template>

<script>
import axios from "axios";
export default {
   name: "post",
   data() {
      return {
         post: {
            userImage: "@/assets/images/user1.jpg",
            postText:
               "Lorem Ipsum is that it has a moreorless norma distribution of letters as opposed to using Content here  content here default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.",
            postImage: "http://localhost:8080/img/post4.jpg",
         },
      };
   },
   methods: {
      async getAlluser() {
         let result = await axios.get(`http://localhost:3000/api/post`);
         if (result.status) {
            console.log(result);
            // localStorage.setItem("userInfo", JSON.stringify(result.data));
            // this.$router.push("/");
         } else {
            console.log("not passed");
         }
      },
   },
   // mounted() {
   //    getAlluser();
   // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
