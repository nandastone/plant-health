<template>
    <div ref="lavContainer" :style="style" />
</template>

<script>
import lottie from 'lottie-web';
export default {
    props: {
        options: {
            type: Object,
            required: true,
        },
        height: Number,
        width: Number || String,
        position: Number,
        animation: Object,
        borderRadius: String,
        margin: String,
    },
    data() {
        return {
            style: {
                width: this.width ? this.width : '90%',
                height: this.height ? this.height : '90%',
                overflow: 'hidden',
                position: this.position || 'absolute',
                borderRadius: this.borderRadius || '100%',
                margin: this.margin || '5%',
            },
        };
    },
    mounted() {
        this.anim = lottie.loadAnimation({
            container: this.$refs.lavContainer,
            renderer: 'svg',
            loop: this.options.loop !== false,
            autoplay: this.options.autoplay !== false,
            animationData: this.animation,
            rendererSettings: this.options.rendererSettings,
        });
        this.$emit('animCreated', this.anim);
    },
};
</script>
