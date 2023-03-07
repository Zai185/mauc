<template>
    <div>
        <nav>
            <i class="bi bi-list" @click="sidebar = !sidebar, console.log('hey')"></i>
            <div class="logo">
                <img src="../img/mauc.png" alt="logo">
            </div>
            <ul :class="{ 'slide-left': !sidebar }">
                <div class="inner-logo">
                    <img src="../img/mauc.png" alt="">
                    <h4>MAUC</h4>
                    <i class="bi bi-x" @click="sidebar = !sidebar"></i>
                </div>
                <router-link :to="{ name: 'Home' }">
                    <li>Home</li>
                </router-link>
                <router-link :to="{ name: 'About' }">
                    <li>About</li>
                </router-link>
                <router-link :to="{ name: 'Course' }">
                    <li>Course</li>
                </router-link>
                <router-link :to="{ name: 'Service' }">
                    <li>Service</li>
                </router-link>
                <!-- <git -->

            </ul>

            <div class="contact">
                <div class="phone">+959 954333511</div>
                <div class="icon">
                    <i class="bi-brand bi-facebook"></i>
                    <i class="bi-brand bi-messenger"></i>
                    <i class="bi-brand bi-whatsapp"></i>
                </div>
            </div>
        </nav>
    </div>
    <router-view />
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const sidebar = ref(false)
        return { sidebar, }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 48px;
    height: 48px;
}

.inner-logo,
.bi-list {
    display: none;
}

.logo{
    img{
        object-fit: cover;
        object-position: center;
    }
}


nav {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 32px;
    box-shadow: 0 1px 10px 0 black;
    background: linear-gradient(var(--primary-color), var(--secondary-color))
}

.bi-list {
    color: #000;
    border: 2px solid black;
    padding: 2px 4px;
    border-radius: 4px;
}

ul {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 500ms ease;
    z-index: 5;

    a {
        height: 100%;
        color: #fff;

        li {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 16px;
            list-style: none;
            cursor: pointer;
            font-size: 18px;
            transition: 300ms;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                top: 71%;
                bottom: 12px;
                left: 8px;
                right: 8px;
                background-color: #fff;
                transform: scaleX(0);
                transition: 300ms ease-in-out;
            }

            &:hover::after {
                transform: scaleX(1);
            }
        }

    }


}



.contact {
    width: 256px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}

.phone {
    width: 60%;
    margin-left: 16px;
    border-right: 1px solid black;
}

.icon {
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin-left: 16px;
}

.icon i {
    margin: 0 4px;
}

@media (max-width: 992px) {
    .contact {
        width: 20%;
        flex-direction: column;
    }

    .phone {
        width: 100%;
        border: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    .icon {
        padding: 0 16px;
        margin: 0;
        width: 100%;
        justify-content: space-around;
    }



}

@media (max-width: 768px) {
    .bi-list {
        display: block;
    }

    .slide-left {
        transform: translateX(-100%);
    }

    nav {
        padding-right: 0;
    }

    ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 50vw;
        justify-content: flex-start;
        background-color: tomato;
        .inner-logo {
            display: flex;
            width: 100%;
            padding: 8px 16px;
            text-align: left;
            font-size: 32px;
            box-shadow: 0 1px 10px 0 black;
            position: relative;
            background-color: var(--primary-color);
    
            img {
                margin-right: 8px;
            }
            .bi-x {
                position: absolute;
                margin-left: 16px;
                font-size: 28px;
                top: -8px;
                right: 0;
        
            }
        }

        a {
            width: 100%;
            height: 64px;

            li {
                width: 100%;
                padding: 16px 0;
                text-align: center;
                display: inline-block;
                position: relative;

                &:nth-of-type(2n) {
                    background-color: rgb(252, 114, 90);
                }


                &:hover {
                    background-color: var(--primary-color);
                }

                &::after {
                    top: 75%;
                    bottom: 14px;
                    right: 64px;
                    left: 64px;
                }
            }

            &:last-of-type {
                li {

                    margin-bottom: 64px;
                    border-bottom: 1px solid #0005;
                }
            }
        }
    }


    .logo {
        order: 1;
    }

    .contact {
        width: 98px;
        order: 2;
    }

    .phone {
        display: none;
    }

    .icon {
        margin: 0;
        padding: 0;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .icon i {
        text-align: center;
        width: 33%;
        margin: 0;
        padding: 0;
    }

}
</style>