<template>
    <div class="wrapper">
        <h4 class="header">Keep plants healthy</h4>
        <p class="info">
            Ever had worms in your butt? That can happen to plants as well (except they don’t have a butt).
        </p>
        <p class="info">
            They sometimes get infested by parasitic worms and insects or infected with fungi, bacteria and viruses. Biosecurity is a way we can all
            help protect plants, whether it’s in your backyard or on a big farm.
        </p>
        <p class="info">Join our brave green-haired Biosecurity Warrior and take a closer look at plant health. Scroll and explore.</p>
        <h5 class="action">
            Scroll and explore
        </h5>
    </div>
</template>

<script>
export default {
    name: 'IntroText',
    components: {},
    methods: {},
};
</script>

<style scoped lang="scss">
.wrapper {
    position: absolute;
    width: 486px;
    height: 385px;
    // left: 566.03px;
    // top: 203px;
    color: #6a69ff;
    // left: 30%;
    // top: 15%;
    left: 20%;
    top: 15%;
}
.header {
    /* header 1 */
    font-family: 'FredokaOne-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 120%;
    text-align: left;
    margin-bottom: 30px;
}
.info {
    /* body */
    font-family: 'Roboto-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    text-align: left;
}
.action {
    /* header 3 */
    margin-top: 30px;
    font-family: 'FredokaOne-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 130%;
    text-align: left;
}
@media (max-width: 1500px) and (min-width: 1200px) {
    .wrapper {
        position: absolute;
        width: 400;
        height: 300;
        left: 13%;
        top: 12%;
    }
    .header {
        font-size: 28px;
        line-height: 31px;
        margin-bottom: 25px;
    }
    .info {
        /* body */
        font-size: 16px;
        line-height: 19px;
        text-align: left;
    }
    .action {
        margin-top: 20px;
    }
}

@media (max-width: 1199px) and (min-width: 993px) {
    .wrapper {
        position: absolute;
        width: 300px;
        height: 200;
        left: 13%;
        top: 12%;
    }
    .header {
        font-size: 22px;
        line-height: 25px;
        margin-bottom: 18px;
    }
    .info {
        font-size: 14px;
        line-height: 16px;
        text-align: left;
    }
    .action {
        margin-top: 18px;
    }
}
</style>
