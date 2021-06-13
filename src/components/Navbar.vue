<template>
  <nav
    class="
      z-50
      top-0
      w-full
      md:flex
      md:justify-between
      md:items-center
      bg-white
    "
  >
    <router-link class="inline-block px-6 py-3 font-semibold" to="/"
      >Mecinkari</router-link
    >
    <span
      @click="navbarToggle"
      class="absolute md:hidden cursor-pointer top-0 right-0 block px-4 py-3"
      ><i
        :class="`fa fa-fw fa-${
          navbar ? 'times text-red-500' : 'bars text-blue-500'
        }`"
      ></i
    ></span>

    <div class="border-b-2 md:border-none" v-if="navbar">
      <router-link
        v-for="link in links"
        :key="link.id"
        :to="link.link"
        active-class="text-blue-600"
        class="font-semibold px-4 py-3 block md:inline-block hover:bg-gray-50"
        >{{ link.title }}</router-link
      >
      <!-- <router-link
        to="/blog"
        active-class="text-blue-600"
        class="font-semibold px-6 py-3 block md:inline-block hover:bg-gray-50"
        >Blog</router-link
      >
      <router-link
        to="/gallery"
        active-class="text-blue-600"
        class="font-semibold px-6 py-3 block md:inline-block hover:bg-gray-50"
        >Gallery</router-link
      > -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbar: false,
      navbarIcon: "bars",
      windowsWidth: window.innerWidth,
      links: [
        {
          id: 1,
          link: "/",
          title: "Home",
        },
        {
          id: 2,
          link: "/blog",
          title: "Blog",
        },
        {
          id: 3,
          link: "/gallery",
          title: "Artworks",
        },
        {
          id: 4,
          link: "/discord-server",
          title: "Discord Server",
        },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.resizeHandle);
    if (this.windowsWidth >= 768) {
      this.navbar = true;
    }
  },
  methods: {
    navbarToggle: function () {
      if (this.windowsWidth <= 768) {
        this.navbar = !this.navbar;
      }
    },
    resizeHandle: function () {
      this.windowsWidth = window.innerWidth;
      if (this.windowsWidth >= 768) {
        this.navbar = true;
      } else {
        this.navbar = false;
      }
    },
  },
};
</script>

<style>
</style>