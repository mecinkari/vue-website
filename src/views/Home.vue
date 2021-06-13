<template>
  <div class="">
    <div
      @click="openTos = false"
      v-if="openTos"
      class="
        fixed
        overflow-y-auto
        z-50
        top-0
        px-6
        left-0
        w-full
        h-screen
        bg-black bg-opacity-75
      "
    >
      <div class="max-w-3xl p-12 bg-white mx-auto rounded">
        <p class="text-3xl font-semibold text-center">Terms Of Service</p>
        <p class="text-xl font-semibold text-center text-gray-600">
          Mecinkari's Watercolor Commission
        </p>
        <hr class="my-4" />
        <div class="divide-y-2 space-y-4 divide-gray-200 divide-solid">
          <div>
            <p class="text-lg font-semibold">Preview.</p>
            <div
              class="
                grid grid-cols-1
                space-y-4
                md:gap-2
                md:space-y-0
                md:grid-cols-2
              "
            >
              <div>
                <img
                  oncontextmenu="return false;"
                  :src="headerImg[0]"
                  class="w-full p-4 border rounded"
                  alt=""
                />
                <p class="text-center font-semibold">Half Body Watercolor</p>
                <p class="text-center font-semibold text-2xl">
                  USD 10.00/<sub>art</sub>
                </p>
              </div>
              <div>
                <img
                  oncontextmenu="return false;"
                  :src="headerImg[2]"
                  class="w-full p-4 border rounded"
                  alt=""
                />
                <p class="text-center font-semibold">Full Body Watercolor</p>
                <p class="text-center font-semibold text-2xl">
                  USD 20.00/<sub>art</sub>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p class="text-lg font-semibold">Payment.</p>
            <ul class="list-disc list-outside">
              <li v-for="list in paymentList" :key="list">
                <p class="inline">{{ list }}</p>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-lg font-semibold">Allowed content.</p>
            <ul class="list-disc list-outside">
              <li v-for="list in allowedList" :key="list">
                <p class="inline">{{ list }}</p>
              </li>
            </ul>
            <p class="text-red-800 bg-red-100">
              I will not accept requests, which are outside of the
              <span class="font-semibold">Allowed Content</span>
              rules.
            </p>
          </div>
          <div>
            <p class="text-lg font-semibold">Contact.</p>
            <p>
              Please use these platforms to contact me if you have any
              questions.
            </p>
            <ul class="list-disc list-outside">
              <li>
                <p class="inline">
                  Telegram:
                  <code class="text-blue-800 bg-blue-100">@mecinkari</code>
                </p>
              </li>
              <li>
                <p class="inline">
                  Discord:
                  <code class="text-blue-800 bg-blue-100">mecinkari#8139</code>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-center mt-6">Thank you for reading this! :D</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home relative flex h-screen w-full bg-white">
      <div
        class="
          w-full
          md:w-1/2
          flex flex-col
          justify-center
          items-center
          h-screen
          bg-white
        "
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
                class="
                  block
                  transition
                  duration-200
                  fa-2x
                  p-4
                  rounded-xl
                  hover:bg-gray-200
                  fab
                  fa-twitter
                "
              ></i
            ></a>
            <a href="https://www.instagram.com/mecinkari/" target="_blank"
              ><i
                class="
                  block
                  transition
                  duration-200
                  fa-2x
                  p-4
                  rounded-xl
                  hover:bg-gray-200
                  fab
                  fa-instagram
                "
              ></i
            ></a>
            <a href="https://www.patreon.com/mecinkari" target="_blank"
              ><i
                class="
                  block
                  transition
                  duration-200
                  fa-2x
                  p-4
                  rounded-xl
                  hover:bg-gray-200
                  fab
                  fa-patreon
                "
              ></i
            ></a>
            <a href="https://github.com/mecinkari" target="_blank"
              ><i
                class="
                  block
                  transition
                  duration-200
                  fa-2x
                  p-4
                  rounded-xl
                  hover:bg-gray-200
                  fab
                  fa-github
                "
              ></i
            ></a>
            <a href="https://mecinkari.itch.io/" target="_blank"
              ><i
                class="
                  block
                  transition
                  duration-200
                  fa-2x
                  p-4
                  rounded-xl
                  hover:bg-gray-200
                  fab
                  fa-itch-io
                "
              ></i
            ></a>
          </div>
        </div>
      </div>
      <div
        oncontextmenu="return false;"
        :style="`--background: url(${headerImg[0]})`"
        class="
          hidden
          relative
          bg-cover bg-center
          my-bg-image
          overflow-hidden
          md:block
          h-screen
          md:w-1/2
        "
      ></div>
    </div>
    <div
      class="
        w-full
        bg-about bg-cover bg-center
        p-6
        flex
        relative
        justify-center
        items-center
        min-h-screen
      "
    >
      <div
        data-aos="zoom-in"
        data-aos-offset="400"
        class="
          shadow-xl
          transition-all
          transform
          -rotate-6
          bg-white
          p-6
          border-2
        "
      >
        <p class="text-3xl md:text-5xl transition-all text-center font-bold">
          Who am I?
        </p>
        <hr class="my-6 border-1" />
        <div class="max-w-2xl text-center text-gray-600 block mx-auto">
          <p class="text-xl mb-6">
            I'm an Indonesian college student who loves to code and create 2D
            art. I have been learning web development for 3 years ongoing and
            did an internship at MNC Media for 3 months as a web developer for
            team sales.
          </p>
          <p class="text-xl">
            I'm also an illustrator who spends most of his time doing art and
            commissions. Because of my love for code and art, I've been doing
            some indie game development and created some game assets.
          </p>
        </div>
      </div>
    </div>
    <div
      class="
        w-full
        bg-about
        flex
        justify-center
        items-center
        px-12
        py-6
        min-h-screen
      "
    >
      <div
        data-aos="fade-up"
        class="w-full grid grid-cols-1 items-center gap-6 md:grid-cols-2 w-full"
      >
        <div class="md:order-last" data-aos-offset="200">
          <h1 class="text-3xl mb-6 font-bold text-center">
            I Also Offer Commissions!
          </h1>
          <p class="text-xl text-center">
            Want to get your character drawn by me? My commissions are open!
            Please read my Terms Of Service before sending me a request with the
            form below!
            <!-- <a
              class="text-blue-600 font-semibold"
              @click="openTos = true"
              href="javascript:void(0)"
              >Terms Of Service</a
            > -->
          </p>
          <button
            @click="openTos = true"
            type="button"
            class="
              text-xl
              mt-5
              bg-blue-500
              active:bg-blue-700
              hover:bg-blue-600
              text-white
              mx-auto
              text-center
              block
              px-4
              py-2
              rounded
            "
          >
            Terms Of Service
          </button>
        </div>
        <div>
          <img
            oncontextmenu="return false;"
            class="
              w-full
              shadow-2xl
              h-auto
              max-w-lg
              mx-auto
              bg-white
              p-6
              border
              rounded
              transform
              rotate-1
            "
            src="../assets/2021-05-14_195046.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="w-full p-6 flex items-center min-h-screen">
      <div class="w-full" data-aos="fade-in" data-aos-offset="300">
        <p class="text-2xl md:text-4xl mb-8 text-center font-bold">
          Request Form
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
                class="
                  w-full
                  block
                  mt-2
                  px-3
                  py-2
                  border-2 border
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-600
                  focus:border-transparent
                "
                placeholder="example: John Doe"
              />
            </div>
            <div class="mt-6">
              <label for="" class="font-semibold"
                >Telegram or Discord username</label
              >
              <input
                type="email"
                required
                name="email"
                class="
                  w-full
                  block
                  mt-2
                  px-3
                  py-2
                  border-2 border
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-600
                  focus:border-transparent
                "
                placeholder="example: @johndoe or johndoe#1234"
              />
            </div>
            <div class="mt-6">
              <label for="" class="font-semibold">Your Message</label>
              <textarea
                required
                name="message"
                class="
                  w-full
                  block
                  mt-2
                  px-3
                  py-2
                  border-2 border
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-600
                  focus:border-transparent
                "
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
      openTos: false,
      successSubmit: false,
      headerImgSelection: 0,
      headerImg: [
        "https://media.discordapp.net/attachments/639160533076934686/853371267700621332/2021-6-12-0530.png?width=630&height=473",
        "https://cdn.sanity.io/images/kk2d333s/production/96ec7897de823776da5085fa0c8816d6c778ac8b-1600x1200.png",
        "https://cdn.sanity.io/images/kk2d333s/production/4519c7ae949114bfc2eeda0f502fac1327feac9f-1500x2000.png",
        "https://cdn.sanity.io/images/kk2d333s/production/327353a13b4e4d7574d65dfdf94f862b0b663659-2000x1500.png",
      ],
      paymentList: [
        "All prices are in USD.",
        "Adding additional character(s) will be +$3.00/character for Half body and +$5.00/character for Full body.",
        "Payment must be sent via PayPal.",
        "Payment must be sent before, during or after sketch process. I will not continue to the next step if the payment has not been done yet.",
        "You will get a full refund if the sketch process isn't at final.",
        "The process can take a week when you're not the last in queue and the complexity is normal.",
      ],
      allowedList: ["Furry", "Human/Anime", "Slight gore"],
    };
  },
  created() {
    this.headerImgSelection = Math.floor(Math.random() * this.headerImg.length);
  },
  mounted() {
    document.title = "Mecinkari";
    new Typed(".typed", {
      strings: [
        "Web Developer.",
        "Freelance Illustrator.",
        "Game Developer.",
        "fan of the Ori Games.",
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
