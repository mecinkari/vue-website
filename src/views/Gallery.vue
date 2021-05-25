<template>
  <div class="gallery min-h-screen p-6">
    <div
      v-if="clickImage"
      @click="closeImage"
      class="fixed top-0 left-0 z-50 w-full flex justify-center items-center p-4 h-screen image-preview"
    >
      <img
        oncontextmenu="return false;"
        id="imagePreview"
        @click="closeImage"
        class="max-h-full max-w-full rounded-2xl block"
        :src="clickedImagePreview"
        alt="previewImage"
      />
    </div>

    <h1 class="text-5xl font-semibold text-center">Artworks</h1>
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
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div class="w-full md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="post in posts" :key="post._id" class="p-2 w-full">
        <card
          @click="getClicked"
          class="w-full h-full"
          :src="post.image.asset.url"
          :alt="post.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import client from "../client";
import Card from "../components/Card.vue";
const query = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  "image": mainImage{
  asset->{
  _id,
  url
	}
}
}`;
export default {
  name: "Gallery",
  components: {
    Card,
  },
  data() {
    return {
      loading: true,
      posts: [],
      clickImage: false,
      clickedImagePreview: "",
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    document.title = "Mecinkari's Artworks";
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
    getClicked() {
      this.clickImage = true;
      const source = event.target.getAttribute("src");
      //   alert(source);
      this.clickedImagePreview = source;
      //   var imagePreview = document.getElementById("imagePreview");
      //   imagePreview.setAttribute("src", source);
    },
    closeImage() {
      this.clickImage = false;
      this.clickedImagePreview = "";
    },
  },
};
</script>

<style lang="scss">
.image-preview {
  background: rgba($color: #000000, $alpha: 0.8);
}

.spinner {
  animation: spin 500ms linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>