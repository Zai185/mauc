<template>
    <div>
        <div class="footer-section">
            <div class="footer-showbox">
                <h4>Class Total</h4>
                <h4 data-val="2" class="footer-counter">0</h4>
            </div>
            <div class="footer-showbox">
                <h4>Class Students</h4>
                <h4 data-val="197" class="footer-counter">0</h4>
            </div>
            <div class="footer-showbox">
                <h4>Big Projects</h4>
                <h4 data-val="11" class="footer-counter">0</h4>
            </div>
            <div class="footer-showbox">
                <h4>Small Projects</h4>
                <h4 data-val="35" class="footer-counter">0</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    setup() {

        onMounted(() => {
            let footer = document.querySelector('.footer-section')
            window.addEventListener('scroll', () => {

                if (footer.getBoundingClientRect().bottom <= window.innerHeight) {
                    let valueDisplays = document.querySelectorAll('.footer-counter')
                    let interval = 2000;
                    valueDisplays.forEach(valueDisplay => {
                        let startValue = 0;
                        let endValue = parseInt(valueDisplay.getAttribute('data-val'))
                        let duration = Math.floor(interval / endValue)
                        let counter = setInterval(() => {
                            startValue++
                            valueDisplay.textContent = startValue
                            if (startValue == endValue) {
                                clearInterval(counter)
                                footer = ''
                            }
                        }, duration)

                    })
                }
            })
        })
        return {}
    }
}
</script>

<style lang="scss" scoped>
.footer-section {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 0 32px;
    background: linear-gradient(#111,#222);
    color: #ccc;

    .footer-showbox {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px;
    }
}
</style>