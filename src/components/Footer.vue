<template>
    <div>
        <div class="footer-section">
            <div class="footer-showbox">
                <h5>Class Total</h5>
                <h5 data-val="2" class="footer-counter">0</h5>
            </div>
            <div class="footer-showbox">
                <h5>Class Students</h5>
                <h5 data-val="197" class="footer-counter">0</h5>
            </div>
            <div class="footer-showbox">
                <h5>Big Projects</h5>
                <h5 data-val="11" class="footer-counter">0</h5>
            </div>
            <div class="footer-showbox">
                <h5>Small Projects</h5>
                <h5 data-val="35" class="footer-counter">0</h5>
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
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 0 32px;
    background: linear-gradient(#111,#222);
    color: #ccc;

    .footer-showbox {
        display: flex;
        width: 25%;
        height: 128px;
        flex-direction: column;
        align-items: center;
        padding: 32px;
        text-align: center;
    }
}

@media (max-width: 992px) {
    .footer-section{

        .footer-showbox{
            width: 50%;
        }
    }
    
}
</style>