<template>
    <div>
        <div class="record-section">
            <div class="img-box" id="img-box-record">
                <img src="../img/img1.jpg" alt="">
            </div>
            <div class="text-box">
                <div class="text-box-record heading valid">
                    <h2>Take a look at our projects record</h2>
                </div>
                <div class="text-box-record projects valid">
                    <h2>We have already finished<br>35 big projects</h2>
                    <!-- <img class="text-box-img one" id="record-one"
                        src="https://cdn.home-designing.com/wp-content/uploads/2018/08/modern-platform-bedroom-sets.jpg"
                        alt="">
                    <img class="text-box-img two" id="record-two"
                        src="https://pinoyhousedesigns.com/wp-content/uploads/2017/08/SHD-2017032-DESIGN3_View03-1.jpg"
                        alt="">
                    <img class="text-box-img three" id="record-three"
                        src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?cs=srgb&dl=pexels-pixabay-462235.jpg&fm=jpg"
                        alt=""> -->photos
                </div>
                <div class="text-box-record class">
                    <h2>We have opened two classes</h2>
                    <div class="class-boxes">
                        <div class="class-box" id="class-one">
                            <h3>Hledan Class</h3>
                            <img src="https://www.buildingplanner.in/images/ready-plans/34N1001.jpg" alt="">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque et
                                consequuntur
                                perferendis ut numquam. Cupiditate unde cumque maiores nobis!</p>
                        </div>
                        <div class="class-box" id="class-two">
                            <h3>North Dagon Class</h3>
                            <img src="https://www.buildingplanner.in/images/ready-plans/34N1001.jpg" alt="">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque et
                                consequuntur
                                perferendis ut numquam. Cupiditate unde cumque maiores nobis!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    setup() {

        onMounted(() => {
            const imgBox = document.getElementById('img-box-record')
            const texts = document.querySelectorAll('.text-box-record.valid')
            const imgOne = document.getElementById('record-one')
            const imgTwo = document.getElementById('record-two')
            const imgThree = document.getElementById('record-three')
            const classOne = document.getElementById('class-one')
            const classTwo = document.getElementById('class-two')
            const imgs = document.querySelectorAll('img')
            imgs.forEach(img => {
                img.setAttribute('loading', 'lazy')
            })
            window.addEventListener('scroll', () => {
                if (imgBox.getBoundingClientRect().top <= window.innerHeight * 0) {
                    imgBox.style.opacity = 1
                } else {
                    imgBox.style.opacity = 0
                }
                texts.forEach(text => {
                    if (text.getBoundingClientRect().top <= window.innerHeight * 0.4 && text.getBoundingClientRect().bottom >= window.innerHeight * 0.5) {
                        text.style.opacity = 1
                    } else {
                        text.style.opacity = 0
                    }
                })
                if (texts[1].getBoundingClientRect().top <= window.innerHeight * 0) {
                    imgOne.style.transform = 'translateX(0)'
                    imgTwo.style.transform = 'translateY(0)'
                    imgThree.style.transform = 'translateX(0)'
                    imgOne.style.opacity = 1
                    imgTwo.style.opacity = 1
                    imgThree.style.opacity = 1
                } else {
                    imgOne.style.transform = 'translateX(200px)'
                    imgTwo.style.transform = 'translateY(-200px)'
                    imgThree.style.transform = 'translateX(-200px)'
                    imgOne.style.opacity = 0
                    imgTwo.style.opacity = 0
                    imgThree.style.opacity = 0
                }
                if (texts[2].getBoundingClientRect().top <= window.innerHeight * 0.25) {
                    classOne.style.opacity = 1
                    classTwo.style.opacity = 1
                    classOne.style.transform = 'translateX(0)'
                    classTwo.style.transform = 'translateX(0)'
                } else {
                    classOne.style.opacity = 0
                    classTwo.style.opacity = 0
                    classOne.style.transform = 'translateX(-200px)'
                    classTwo.style.transform = 'translateX(200px)'

                }
            })
        })
        return {}
    }


}
</script>

<style lang="scss" scoped>
.record-section {
    width: 100%;
    height: calc(300vh + 288px);
    position: relative;

    .img-box {
        width: 100%;
        position: sticky;
        top: 0;
        z-index: -1;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom right, #00f9, #00f5);
        }

        img {
            width: 100%;
            height: 100vh;

        }
    }

    .text-box {
        width: 100%;
        position: absolute;
        top: 256px;
        left: 0;

        .text-box-record {
            width: 75%;
            height: 100vh;
            margin: 0 auto;
            padding: 64px;
            text-align: center;
            color: white;
            position: relative;

            .text-box-img {
                display: inline-block;
                object-fit: cover;
                position: absolute;
                z-index: -1;
            }

            .one,
            .two {
                width: 512px;
                height: 256px;
                top: 40%;
                right: -10%;
            }

            .two {
                height: 320px;
                top: 50%;
                left: 25%;
                z-index: 1;
            }

            .three {
                width: 288px;
                height: 472px;
                top: 35%;
                left: 1%;
            }
        }

        .heading {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .class {
            padding: 0 0 64px;
            border: 1px solid black;
            
            h2 {
                font-size: 54px;
                height: 20%;
            }
            
            .class-boxes {
                border: 1px solid red;
                display: flex;
                width: 100%;
                height: 80%;
                justify-content: space-between;
                align-items: center;

                h3 {
                    font-size: 38px;
                }

                .class-box {
                    width: 48%;

                    img {
                        width: 320px;
                        height: 320px;
                        object-fit: contain;
                        object-position: center;
                    }
                }
            }
        }


    }
}

@media(max-width: 992px) {

    .record-section {
        .text-box {
            .text-box-record {
                width: 100%;
                padding: 64px 0;

                h2 {
                    font-size: 45px;
                }
            }

            .class {

                h2 {
                    margin-bottom: 16px;
                }

                .class-boxes {
                    padding: 0 48px;

                    .class-box {
                        width: 50%;

                        h3 {
                            font-size: 32px;
                        }

                        img {
                            width: 80%;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .record-section {
        height: calc(300vh + 700px);
        .text-box {
            .class {
                padding: 24px 0;
                height: calc(100vh + 360px);
                h2{
                    height: 10%;
                }
                .class-boxes {
                    flex-wrap: wrap;

                    .class-box {
                        width: 100%;
                        margin-bottom: 24px;
                        
                    }
                }
            }
        }
    }
}
</style>