<template>
    <div>
        <Hero />
        <Founder />
        <Record />
        <Footer />
    </div>
</template>

<script>
import Founder from './Founder.vue';
import Hero from './Hero.vue';
import Record from './Record.vue'
import Footer from './Footer.vue'
export default {
    components: { Hero, Founder, Record, Footer },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>