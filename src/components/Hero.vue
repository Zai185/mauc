<template>
  <div style="position: relative">
    <div class="img-box">
      <img :src="imgId" alt="" id="hey" loading="lazy">
    </div>
    <div class="text-box">
      <div class="text">
        <h2>lorem heading</h2>
        <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        <button><span>Read More</span></button>
      </div>
    </div>
    <div class="catagory-box">
      <div class="catagory"
        @mouseover="opcOff(); imgId = 'https://i0.wp.com/blogs.autodesk.com/autocad/wp-content/uploads/sites/35/2020/06/Free-Web-App-Access-Feature-1536X830.jpg?fit=1536%2C830&ssl=1'"
        @mouseleave="opcOffT(); imgId = '/src/img/img1.jpg'">
        <i class="bi-brand bi-person"></i>
        <p>About</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ab!</p>
      </div>
      <div class="catagory"
        @mouseover="opcOff(); imgId = 'https://www.thoughtco.com/thmb/EPqtQmH1RDavJxU3Iydmy_WO3v8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/teacher-giving-a-lecture-at-the-it-classroom-669775764-5c43f5edc9e77c00010c73e2.jpg'"
        @mouseleave="opcOffT(); imgId = '/src/img/img1.jpg'">
        <i class="bi-brand bi-book"></i>
        <p>Course</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ab!</p>
      </div>
      <div class="catagory"
        @mouseover="opcOff(); imgId = 'https://i0.wp.com/blogs.autodesk.com/autocad/wp-content/uploads/sites/35/2020/06/Free-Web-App-Access-Feature-1536X830.jpg?fit=1536%2C830&ssl=1'"
        @mouseleave="opcOffT(); imgId = '/src/img/img1.jpg'">


        <i class="bi-brand bi bi-cash"></i>
        <p>Service</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ab!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const imgId = ref('src/img/img1.jpg')
    const opcOff = () => {
      const animated = document.getElementById('hey')
      animated.style.animation = 'fade 200ms'
    }
    const opcOffT = () => {
      const animated = document.getElementById('hey')
      animated.style.animation = 'fade-2 200ms'
    }
    return { imgId, opcOff, opcOffT }
  }
}
</script>

<style lang="scss" scoped>
.img-box {
  width: 100%;
  height: 650px;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
  transition: 200ms;
}

.text-box {
  width: 100%;
  padding: 32px 64px 32px 45%;
  background-color: #ff4500;
}

.text {
  width: 80%;
  text-align: justify;
  color: #eee;

  button {
    margin-top: 16px;
    border: 2px solid #fff;
    padding: 16px 32px;
    font-size: 23px;
    position: relative;
    transition: 300ms;
    color: #fff;
    background: transparent;
    cursor: pointer;
    z-index: 1;

    &::before {
      z-index: -1;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      transform: scaleX(0);
      transform-origin: 0 0;
      transition: 300ms;
    }

    &:hover {
      color: orangered;
    
    }
    
    &:hover::before {
      transform: scaleX(1);
    }


  }
}


.catagory-box {
  position: absolute;
  top: 0;
  left: 12%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 48px 0 16px;
}

.bi-brand {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  background-color: orangered;
  padding: 16px;
  border-radius: 50%;
  color: #fff;


}

.catagory {
  width: 382px;
  height: 240px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
  justify-content: space-between;
}

@media (max-width: 1200px) {
  .catagory-box{
    left: 6%;

    .catagory{
      width: 320px;
    }
  }
}

@media (max-width: 992px) {
  .catagory-box{
    flex-direction: row;
    top: 40%;
    left: 0;
    height: auto;
    width: 100%;
    .catagory{
      transform: scale(0.8);
    }
  }
  .text-box{
    height: 384px;
    padding: 64px 64px 16px;
  }
}
</style>