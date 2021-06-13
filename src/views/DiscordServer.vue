<template>
  <div>
    <section
      class="min-h-screen p-10 bg-white flex justify-center items-center"
    >
      <div class="text-center px-6 max-w-2xl">
        <img
          src="../assets/kari-server-icon.png"
          class="mx-auto mb-6 w-36 rounded-full shadow-lg"
          alt="logo"
        />
        <h1
          class="
            text-5xl
            mb-4
            font-bold
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-red-400
            to-blue-500
          "
        >
          MSG Server
        </h1>
        <p class="text-lg font-normal">
          My and my friends are made our own Discord server for gather people
          and make good comunity, and get rid all the drama.
        </p>
        <hr class="my-6" />
        <div
          class="
            grid
            mb-6
            space-y-6
            md:space-y-0
            grid-cols-1
            md:grid-cols-3
            space-x-0
            md:space-x-6
          "
        >
          <div
            class="card rounded shadow p-2"
            v-for="card in cards"
            :key="card.username"
          >
            <img
              :src="card.profile"
              class="w-36 mx-auto rounded-full mb-4"
              :alt="card.username"
            />
            <p class="text-blue-500 font-bold text-xl">
              <a :href="card.link">{{ card.username }}</a>
            </p>
            <p class="font-normal">{{ card.desc }}</p>
          </div>
        </div>
        <a
          class="
            p-3
            inline-block
            text-lg
            font-semibold
            mx-auto
            rounded
            bg-indigo-400
            text-white
          "
          href="https://discord.gg/hs9vxf8Wz9"
          target="_blank"
          >Join the server</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          username: "@mecinkari",
          profile:
            "https://pbs.twimg.com/profile_images/1403845865039568897/JVmdGjuZ_400x400.jpg",
          desc: "Server Owner",
          link: "https://twitter.com/mecinkari",
        },
        {
          username: "@birdypilot",
          profile:
            "https://pbs.twimg.com/profile_images/1290831029008134145/5_8LWkBN_400x400.png",
          desc: "Server Moderation",
          link: "https://twitter.com/birdypilot",
        },
        {
          username: "@simplehowl1",
          profile:
            "https://pbs.twimg.com/profile_images/1394024587558543360/w_XL8K7S_400x400.jpg",
          desc: "Server Moderation",
          link: "https://twitter.com/simplehowl1",
        },
      ],
    };
  },
};
</script>

<style>
</style>