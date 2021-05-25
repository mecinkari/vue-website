<template>
  <div>
    <div class="home relative flex h-screen w-full bg-white">
      <div
        class="w-full md:w-1/2 flex flex-col justify-center items-center h-screen bg-white"
      >
        <div class="block px-12 w-full">
          <p class="text-lg font-semibold">Hi! I'm</p>
          <h1 class="text-5xl font-bold my-2">Mecinkari</h1>
          <h2
            class="text-sm md:text-3xl font-mono mt-4 font-bold text-gray-600"
          >
            A <span class="typed"></span>
          </h2>
          <div class="mt-10 flex w-full justify-start">
            <a href="https://twitter.com/mecinkari" target="_blank"
              ><i
                class="block transition duration-200 fa-2x p-4 rounded-xl hover:bg-gray-200 fab fa-twitter"
              ></i
            ></a>
            <a href="https://www.instagram.com/mecinkari/" target="_blank"
              ><i
                class="block transition duration-200 fa-2x p-4 rounded-xl hover:bg-gray-200 fab fa-instagram"
              ></i
            ></a>
            <a href="https://github.com/mecinkari" target="_blank"
              ><i
                class="block transition duration-200 fa-2x p-4 rounded-xl hover:bg-gray-200 fab fa-github"
              ></i
            ></a>
            <a href="https://mecinkari.itch.io/" target="_blank"
              ><i
                class="block transition duration-200 fa-2x p-4 rounded-xl hover:bg-gray-200 fab fa-itch-io"
              ></i
            ></a>
          </div>
        </div>
      </div>
      <div
        oncontextmenu="return false;"
        :style="`--background: url(${headerImg[0]})`"
        class="hidden relative bg-cover bg-center my-bg-image overflow-hidden md:block h-screen md:w-1/2"
      ></div>
    </div>
    <div
      class="w-full bg-about bg-cover bg-center p-6 flex relative justify-center items-center min-h-screen"
    >
      <div
        data-aos="zoom-in"
        data-aos-offset="400"
        data-aos-once="true"
        class="shadow-xl transition-all transform bg-white p-6 rounded-xl"
      >
        <p class="text-5xl transition-all text-center font-bold">Who am I?</p>
        <hr class="my-6 border-2" />
        <div class="max-w-2xl text-gray-600 block mx-auto">
          <p class="text-xl mb-6">
            I'm an Indonesian college student who love to code and do art stuff.
            Have been learning web development for 3 years and still going. Have
            been internship in MNC Media for 3 months as web developer for team
            sales.
          </p>
          <p class="text-xl">
            I'm also an illustrator who spent most of the times doing some arts
            and commissions. Also because of my skills for code and art, I've
            been doing some indie game projects and created some game assets.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full p-6 flex items-center min-h-screen">
      <div class="w-full">
        <p class="text-2xl md:text-4xl mb-8 text-center font-bold">
          Leave A Message
        </p>
        <div class="max-w-2xl mx-auto">
          <div class="block py-2 px-4 mb-4 bg-green-100" v-if="successSubmit">
            <span class="text-green-800 font-semibold"
              >Your message has been sent! Thank you!</span
            >
          </div>
          <form name="submit-to-google-sheet">
            <div>
              <label for="" class="font-semibold">Your Name</label>
              <input
                type="text"
                required
                name="name"
                class="w-full block mt-2 px-3 py-2 border-2 border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div class="mt-6">
              <label for="" class="font-semibold">Your Email</label>
              <input
                type="email"
                required
                name="email"
                class="w-full block mt-2 px-3 py-2 border-2 border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="johndoe@example.com"
              />
            </div>
            <div class="mt-6">
              <label for="" class="font-semibold">Your Message</label>
              <textarea
                required
                name="message"
                class="w-full block mt-2 px-3 py-2 border-2 border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div class="mt-6">
              <button
                type="submit"
                class="py-2 px-4 bg-blue-500 text-white font-semibold rounded"
              >
                {{ formSubmit }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Typed from "typed.js";

export default {
  name: "Home",
  data() {
    return {
      formSubmit: "Submit",
      successSubmit: false,
      headerImg: [
        "https://cdn.sanity.io/images/kk2d333s/production/96ec7897de823776da5085fa0c8816d6c778ac8b-1600x1200.png",
        "https://cdn.sanity.io/images/kk2d333s/production/4519c7ae949114bfc2eeda0f502fac1327feac9f-1500x2000.png",
      ],
    };
  },
  components: {},
  mounted() {
    document.title = "Mecinkari";
    new Typed(".typed", {
      strings: [
        "Web Developer.",
        "Freelance Illustrator.",
        "Game Developer.",
        "Ori The Game Fan.",
      ],
      typeSpeed: 30,
      backDelay: 2000,
      showCursor: true,
      cursorChar: "_",
      loop: true,
    });

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzc3THFAKoHjxfJDpJgUgnkxnx-_SSuuURTgkQUxJvKWL1K7zYDhnIDuDk6TnQsv9wT/exec";
    const form = document.forms["submit-to-google-sheet"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.formSubmit = "Sending...";
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log("Success!", response);
          this.formSubmit = "Submit";
          this.successSubmit = true;
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    });
  },
};
</script>

<style lang="scss">
.my-bg-image {
  // filter: grayscale(1);
  transition: all 500ms;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(59, 125, 224, 0),
      rgba(235, 62, 62, 0)
    ),
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 1),
      rgba(59, 125, 224, 0),
      rgba(235, 62, 62, 0)
    ),
    var(--background);

  // &:hover {
  //   filter: grayscale(0);
  // }
}
.bg-about {
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1),
      rgba(59, 125, 224, 0),
      rgba(235, 62, 62, 0)
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 1),
      rgba(59, 125, 224, 0),
      rgba(235, 62, 62, 0)
    ),
    url("../assets/2021-5-25-0937.png");
}
</style>
