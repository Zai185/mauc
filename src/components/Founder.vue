<template>
    <div>
        <div>
            <div class="founder-section">
                <div class="container">
                    <div class="section-1">
                        <div class="text" id="text">
                            <h4>Why you should join us...</h4>
                        </div>
                        <div class="text" id="text">
                            <h4>low cost</h4>
                        </div>
                        <div class="text" id="text">
                            <h4>save time</h4>
                        </div>
                        <div class="text" id="text">
                            <h4>trusted community</h4>
                        </div>
                    </div>
                    <div class="section-2">
                        <div class="img-box" id="img-box">
                            <img src="../img/mauc.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
    setup() {
        onMounted(() => {
            const img = document.querySelector('#img-box')
            const texts = document.querySelectorAll('#text')
            window.addEventListener('scroll', () => {
                if (img.getBoundingClientRect().top < window.innerHeight * 0.50 && img.getBoundingClientRect().top > window.innerHeight * 0.30) {
                    img.style.opacity = 1
                    img.style.transform = 'translateX(0)'
                } else {
                    img.style.opacity = 0
                    img.style.transform = 'translateX(128px)'
                }
                texts.forEach(text => {
                    if (text.getBoundingClientRect().top < window.innerHeight * 0.50 && text.getBoundingClientRect().top > 0) {
                        text.style.opacity = 1
                    } else {
                        text.style.opacity = 0
                    }
                })
            })
        })
        return {}

    }
}
</script>

<style lang="scss" scoped>
.founder-section {
    width: 100%;
    position: relative;
}

.container {
    display: flex;
    height: 1800px;
}

.text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 300px;
    background-color: var(--primary-color);
    color: #fff;
    margin-bottom: 128px;
}

.text:first-of-type {
    margin-top: 250px;
}

.img-box {
    width: 100%;
    height: 152px;
    position: sticky;
    margin-top: 256px;
    top: 256px;
    background-color: #3f3333;
}

.img-box img {
    height: 150%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

}

.founder-img-box {
    width: 192px;
    height: 192px;
    background-color: #3f3333;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
}

.img-box-add {
    width: 64px;
    height: 192px;
    background-color: #3f3333;
}


.section-1 {
    width: 60%;
    height: 100%;
}

.section-2 {
    width: 40%;
    height: 100%;
}
</style>