<template>
  <div class="blog min-h-screen p-6">
    <h1 class="text-5xl font-semibold text-center">Blog</h1>
    <hr class="my-8" />
    <div class="loading text-center" v-if="loading">
      <!-- <i class="fa fa-3x spinner fa-circle-notch"></i> -->
      <div
        class="w-full md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div v-for="n in 6" :key="n" class="p-2 w-full">
          <div
            class="rounded-xl shadow w-full md:h-64 bg-gray-100 object-cover"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="
        w-full
        space-x-0
        md:space-x-4
        space-y-10
        md:space-y-0
        grid
        lg:grid-cols-3
        md:grid-cols-2
        grid-cols-1
        lg:px-24
      "
    >
      <router-link
        :to="`/blog/${post.slug.current}`"
        v-for="post in posts"
        :key="post._id"
      >
        <card :src="post.image.asset.url" :alt="post.image.asset.url" />
        <p class="text-2xl mt-2 font-semibold">
          {{ post.title }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import client from "../client";
import Card from "../components/Card.vue";
const query = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  "image": mainImage{
  asset->{
  _id,
  url
	}
}
}`;
export default {
  name: "Blog",
  components: {
    Card,
  },
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    document.title = "Mecinkari's Blog Site";
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      client.fetch(query).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
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