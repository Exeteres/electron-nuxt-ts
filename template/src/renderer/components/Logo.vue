<!-- https://electronjs.org/ -->
<!-- https://github.com/nuxt/nuxtjs.org/blob/master/components/VueToNuxtLogo.vue -->

<template>
  <div class="hero">
    <div class="VueToNuxtLogo">
      <div class="Triangle Triangle--two"></div>
      <div class="Triangle Triangle--one"></div>
      <div class="Triangle Triangle--three"></div>
      <div class="Triangle Triangle--four"></div>
    </div>
    <svg class="logo" viewBox="-10 -10 210 310" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <g class="hero-icons">
          <path
            class="hero-icon hero-icon-1 hero-icon--line"
            d="M67.9100478,46.533669 C41.4232923,41.7095462 19.6934451,46.302143 11.3075829,60.8268822 C5.08594528,71.6030748 7.27151972,86.0067879 15.9285936,101.106252"
          ></path>
          <path
            class="hero-icon hero-icon-2 hero-icon--line"
            d="M30.2849913,120.46661 C41.243568,132.509273 55.7667544,144.206588 72.8846905,154.089633 C113.69002,177.648601 156.051349,183.283871 176.168455,169.566881"
          ></path>
          <circle class="hero-icon hero-icon-3 hero-icon--circle" cx="185" cy="163" r="11"></circle>

          <path
            class="hero-icon hero-icon-4 hero-icon--line"
            d="M168.712085,117.011934 C186.053192,96.5261231 192.894725,75.4688937 184.526327,60.9744031 C178.406575,50.3746817 165.18029,45.0644667 148.184837,44.8434393"
          ></path>
          <path
            class="hero-icon hero-icon-5 hero-icon--line"
            d="M123.879401,47.4832579 C107.838006,50.9201969 90.2641836,57.6854858 72.9698617,67.6703673 C30.9602155,91.9246478 4.57811277,127.105828 8.15869375,151.502356"
          ></path>
          <circle class="hero-icon hero-icon-6 hero-icon--circle" cx="11" cy="163" r="11"></circle>

          <path
            class="hero-icon hero-icon-7 hero-icon--line"
            d="M57.2996169,169.094663 C66.3669653,194.413962 81.1998943,210.912475 97.9595403,210.912475 C110.104945,210.912475 121.238508,202.248064 129.899251,187.841199"
          ></path>
          <path
            class="hero-icon hero-icon-8 hero-icon--line"
            d="M140.356454,163.91057 C145.161419,148.555719 147.938898,130.403455 147.938898,110.95376 C147.938898,63.2217718 131.210891,23.3038536 108.840161,13.3705693"
          ></path>
          <circle class="hero-icon hero-icon-9 hero-icon--circle" cx="98" cy="12" r="11"></circle>
        </g>
      </g>
    </svg>
  </div>
</template>

<style>
.hero {
  position: relative;
}

.logo {
  position: absolute;
  width: 300px;
}

.hero-icon {
  transform-origin: 50% 50%;
  stroke: #9feaf9;
  stroke-width: 5;
  stroke-linecap: round;
}

.hero-icon--line {
  stroke-dasharray: 170;
  stroke-dashoffset: 170;
}

.hero-icon--circle {
  stroke-dasharray: 70;
  stroke-dashoffset: 70;
}

.hero-icon-1 {
  animation: hero-icon-animation 1s 3.2s cubic-bezier(0.05, 0.35, 0.2, 1)
    forwards;
}

.hero-icon-2 {
  animation: hero-icon-animation 1s 3.3s cubic-bezier(0.05, 0.35, 0.2, 1)
    forwards;
}

.hero-icon-3 {
  animation: hero-icon-animation 1s 3.4s cubic-bezier(0.05, 0.35, 0.2, 1)
    forwards;
}

.hero-icon-4 {
  animation: hero-icon-animation 1s 3.5s cubic-bezier(0.05, 0.35, 0.2, 1)
    forwards;
}

.hero-icon-5 {
  animation: hero-icon-animation 1s 3.6s cubic-bezier(0.05, 0.35, 0.2, 1)
    forwards;
}

.hero-icon-6 {
  animation: hero-icon-animation 1s 3.7s cubic-bezier(0.05, 0.35, 0.2, 1)
    forwards;
}

.hero-icon-7 {
  animation: hero-icon-animation 1s 3.8s cubic-bezier(0.05, 0.35, 0.2, 1)
    forwards;
}

.hero-icon-8 {
  animation: hero-icon-animation 1s 3.9s cubic-bezier(0.05, 0.35, 0.2, 1)
    forwards;
}

.hero-icon-9 {
  animation: hero-icon-animation 1s 4s cubic-bezier(0.05, 0.35, 0.2, 1) forwards;
}

@keyframes hero-icon-animation {
  100% {
    stroke-dashoffset: 0;
  }
}

.VueToNuxtLogo {
  top: 60px;
  left: 30px;
  display: inline-block;
  animation: turn 2s linear forwards;
  transform: rotateX(180deg) scale(0.5);
  position: absolute;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}
.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}
.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 2.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}
.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 2.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}
.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 2s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
@keyframes godown {
  100% {
    top: 180px;
  }
}
@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
