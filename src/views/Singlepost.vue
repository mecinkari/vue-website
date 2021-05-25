<template>
  <div class="singlepost p-6 w-full bg-white">
    <div v-if="post">
      <div class="relative">
        <img
          oncontextmenu="return false;"
          class="rounded-xl shadow w-full h-72 object-cover"
          :src="imageUrlFor(post.image)"
          alt=""
        />
        <h1
          class="text-center p-8 bg-opacity-75 max-w-4xl rounded bg-white text-3xl md:text-5xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-semibold"
        >
          {{ post.title }}
        </h1>
      </div>
      <article class="prose prose-xl p-6 mx-auto">
        <SanityBlocks :blocks="blocks" />
      </article>
      <hr class="mb-5" />
      <p class="text-center text-gray-600 font-semibold text-xl">
        created by: {{ post.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(client);
const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body, 
 "image": mainImage{
  asset->{
  _id,
  url
}
},
"name":author->name,
"authorImage":author->image
}[0]
`;
export default {
  name: "Singlepost",
  components: { SanityBlocks },
  data() {
    return {
      loading: true,
      post: [],
      blocks: [],
      title: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      document.title = "Loading...";

      client.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          this.blocks = post.body;
          document.title = post.title;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style>
</style>