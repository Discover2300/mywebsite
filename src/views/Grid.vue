<template>
  <section id="about">
    <div class="container-fluid m-0 p-0">
      <div class="row first-section align-items-center no-gutters">
        <vue-particles
          :particlesNumber="90"
          linesColor="#220052"
          color="#220052"
          class="particles-bg"
          >
        </vue-particles>
        <div class="col-12">
          <div class="row first-section-inner mx-auto align-items-center">
        <div class="col-12 col-md-auto mx-auto order-2 order-md-1 text-center text-md-left">
          <div class="row about-me mx-auto">
            <div class="col-12">
              <h4 class="hello">Hello I'm</h4>
            </div>
            <div class="col-12">
              <h2 class="name">Schimkovits Ádám</h2>
            </div>
            <div class="col-12">
              <h3>Front-end developer</h3>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12 data">
                  <i class="fas fa-envelope"></i>
                  adamka2300@gmail.com
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12 data">
                  <i class="fas fa-phone"></i>
                  +36203890570
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12 data">
                  <i class="fas fa-map-marker"></i>
                    Budapest
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-auto ml-auto">
                  <a href="https://www.facebook.com/adam.schimkovits" class="logo">
                    <i class="fab fa-facebook-square fa-2x" ></i>
                  </a>
                </div>
                <div class="col-auto mr-auto">
                  <a href="https://www.linkedin.com/in/schadam25/" class="logo">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div class="col-auto mx-auto order-1 order-md-2 mb-5">
          <div class="img-image">
            <img src="~@/assets/Image/en.jpg">
          </div>
        </div>
          </div>
        </div>
 
      </div>

      <div class="row second-section mx-auto align-items-center">
        <div class="col-12 mx-auto col-md-auto">
           <div class="img-container">
            <img class="photo" src="~@/assets/Image/program.jpg">
           </div>
        </div>
        <div class="col-12 col-md-auto mx-auto text-center skills about-me">
          <div class="row pb-3">
          <div class="col-12">
            <h2 class="me">About me</h2>
          </div>
          </div>
          <div class="row pb-3">
          <div class="col-auto">
           <p class="review">I am Adam from Budapest. I turned 18 in february.<br> I have played sports all my life, and i can play guitar as well. I am also good at</p> 
          </div>
          </div>
          <div class="row align-items-center no-gutters pb-3 ml-2">
            <div class="col-auto pb-2" v-for="(item, index) in techskills" :key="'item_' + index ">
              <span class="list">
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row third-section align-items-center mx-auto">
        <div class="col">
          <div class="row">
            <div class="col-12 text-center">
              <h3 style="font-size:36px; opacity:0.9; margin-bottom:3rem;">Technical Skills</h3>
            </div>
          </div>
          <div class="row" v-for="(item, index) in techskills" :key="'item_' + index">
            <div class="col-auto mr-auto">{{ item.name }}</div>
            <div class="col-auto">{{ item.value }}%</div>
            <div class="col-12">
              <div class="progressbar">
                <div class="progress" :style="'width:' + item.value + '%'"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row text-center">
            <div class="col-12 align-items-center pt-5 pt-md-0">
              <h3 style="font-size:36px; opacity: 0.9; margin-bottom:1.5rem;">Professional Skills</h3>
            </div>
          </div>
          <div class="row p-1 mx-auto">
            <div class="col-6 pt-3" v-for="(item, index) in profskills" :key="'list_' + index">
              <div class="row text-center">
              <div class="col-12">
              <div class="outerbox mx-auto">
                <svg class="box">
                <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#cec1e7" stroke-width="5" fill-opacity="0"></path>
                <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#220052" stroke-width="5" fill-opacity="0" :style="'stroke-dasharray: 298.493, 298.493;stroke-dashoffset:' + item.offset"></path> 
              </svg>
              <span class="percentage commun">{{ item.value }}%</span>
              </div>
              <div class="row text-center align-items-center">
                  <div class="col-12 py-3">
                    <p class="mental m-0">{{ item.name }}</p>
                  </div>
                </div>
            </div>
            </div>
            </div>
  
            </div> 
          </div>
        </div>
      </div>
  </section>
  </template>

<script>
  import TheFooter from "@/components/TheFooter";

  export default {
    name: "Grid",

    components: {
      TheFooter,
    },

    data() {
      return {
        techskills: [{
          name:"HTML",
          value: 70,
        }, {
          name:"CSS",
          value: 60,
        }, {
          name:"JavaScript",
          value: 50,
        }, {
          name:"SASS",
          value: 60,
        }, {
          name:"Vue",
          value: 30,
        }, {
          name:"Bootstrap",
          value: 80,
        }, {
          name:"Git",
          value: 10,
        }],
        profskills:[{
          name:"Communication",
          value: 75,
          offset: 75,
        }, {
          name:"Team-work",
          value: 78,
          offset: 60,
        }, {
          name:"Management",
          value: 91,
          offset: 42,
        }, {
          name:"Creativity",
          value: 89,
          offset: 50,
        }]
      };
    },
  };
</script>

<style lang="scss" scoped>
  #about{
    background-color: #F0F0F0;
  }
  .first-section {
    min-height: 100vh;
    position: relative;
    color:#220052;
    .first-section-inner{
      max-width:1140px;
    }
    .particles-bg{
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
    }
    .about-me {
      max-width: 400px;
    }

    .img-image {
      width: 300px;
      height: auto;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.07);
      border: 20px solid rgba(0, 0, 0, 0.17);

      img {
        width: 100%;
        height: auto;
      }
    }

    .hello {
      border-top-left-radius: 20px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 5px;
      background-color: #220052;
      font-weight: bold;
      font-size: 18px;
      padding: 10px;
      display:inline-block;
      color:#fff;
    }

    .name{
      font-weight: bold;
      font-size: 42px;
    }

    .data{
      font-size: 16px;
      :hover{
        color:rgba(165, 55, 253, 1);
      }
    }
    .fa-facebook-square:hover,
    .fa-linkedin:hover{
      color:rgba(165, 55, 253, 1);
    }

    .logo{
      color: #220052;
    }
  }

  .second-section{
    min-height:100vh;
    max-width:1140px;
    .photo{
      opacity:0.7;
      width:100%;
      border-top-left-radius: 90px;
      border-top-right-radius: 90px;
      border-bottom-right-radius: 90px;
      border-bottom-left-radius: 90px;
      border: 2px solid #220052;
    }
    .list{
    border: 1px solid #220052;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 2px 6px;
    margin-right: 5px;
    opacity: 0.9;
    }
    .review{
      font-size: 14px;
      opacity: 0.9;
    }
    .me{
      text-align: left;
      font-weight: bold;
      font-size: 36px;
      opacity: 0.9;
    }
  }

  .third-section{
    min-height:100vh;
    max-width:1140px;
    .skills-left{
      width: 480px;
    }
    .progressbar {
      width: 100%;
      height: 7px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      background:#cec1e7;
      position:relative;
      .progress{
        height: 7px;
        background-color: #220052;
      }
    }
    .outerbox{
      width:100px;
      height:100px;
      position:relative;
        .box{
      height: 100%;
      width:100%;   
    }.percentage{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        z-index: 100;
      }
    }
  }
.img-container{
 max-width:400px;
 height:auto;
 img{
 width:100%;
 height:auto;
 }
}
</style>
