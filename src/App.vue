<template>
    <div id="app" class="desktopWrapper" ref="desktopWrapper">
        <div class="main-text" ref="introText">
            <IntroText />
        </div>
        <div class="characterIcon" ref="characterIcon">
            <CharacterTalk v-if="this.activeContent" />
            <CharacterIcon v-else />
        </div>
        <div class="svgWrapper desktopSvg" ref="svgWrapper" v-if="screenSize === 'desktop'">
            <DesktopBaseSvg @mouseover="mouseOver" />
        </div>
        <div class="svgWrapper tabletSvg" ref="svgWrapper" v-if="screenSize === 'tablet' || screenSize === 'laptop'">
            <TabletBaseSvg @mouseover="mouseOver" />
        </div>
        <div class="svgWrapper mobileSvg" ref="svgWrapper" v-if="screenSize === 'mobile'">
            <MobileBaseSvg @mouseover="mouseOver" />
        </div>

        <div class="logos">
            <img class="first-logo" src="./assets/content/logo_pbsf.png" />
            <img class="second-logo" src="./assets/content/logo_crawford-fund.png" />
        </div>
        <div
            class="hoverRing"
            ref="hoverRing"
            v-bind:style="{ position: 'absolute', top: hoverPosition.y + 'px', left: hoverPosition.x + 'px', display: 'none' }"
            v-on:click="onClick"
        >
            <Lottie :options="{ loop: true, autoplay: true }" :animation="HoverRing" />
        </div>
        <div class="lottie-wrapper mites" v-bind:style="displayAnimation('mites')" v-on:click="onClick">
            <Lottie :options="{ loop: true, autoplay: true }" :animation="Mites" />
        </div>
        <div class="lottie-wrapper aphids" v-bind:style="displayAnimation('aphids')" v-on:click="onClick">
            <Lottie :options="{ loop: true, autoplay: true }" :animation="Aphids" />
        </div>
        <div class="lottie-wrapper caterpillars" v-bind:style="displayAnimation('caterpillars')" v-on:click="onClick">
            <Lottie :options="{ loop: true, autoplay: true }" :animation="Caterpillars" />
        </div>
        <div class="lottie-wrapper virus" v-bind:style="displayAnimation('virus')" v-on:click="onClick">
            <Lottie :options="{ loop: true, autoplay: true }" :animation="Virus" />
        </div>
        <div class="lottie-wrapper softrot" v-bind:style="displayAnimation('softrot')" v-on:click="onClick">
            <Lottie :options="{ loop: true, autoplay: true }" :animation="Softrot" />
        </div>
        <div class="lottie-wrapper nematode" v-bind:style="displayAnimation('nematode')" v-on:click="onClick">
            <Lottie :options="{ loop: true, autoplay: true }" :animation="Nematode" />
        </div>
        <div class="lottie-wrapper rootrot" v-bind:style="displayAnimation('rootrot')" v-on:click="onClick">
            <Lottie :options="{ loop: true, autoplay: true }" :animation="Rootrot" />
        </div>
        <div class="content-wrapper" v-on:click="hideContent" v-if="displayContent">
            <MitesText v-if="activeContent === 'mites'" />
            <AphidsText v-if="activeContent === 'aphids'" />
            <CaterpillarsText v-if="activeContent === 'caterpillars'" />
            <VirusText v-if="activeContent === 'virus'" />
            <SoftrotText v-if="activeContent === 'softrot'" />
            <NematodeText v-if="activeContent === 'nematode'" />
            <RootrotText v-if="activeContent === 'rootrot'" />
        </div>
    </div>
</template>

<script>
import Vue2TouchEvents from 'vue2-touch-events';
import Vue from 'vue';

import DesktopBaseSvg from './assets/content/desktop-base.svg';
import TabletBaseSvg from './assets/content/tablet-base.svg';
import MobileBaseSvg from './assets/content/mobile-base.svg';
import CharacterIcon from './assets/content/character_fly.svg';
import CharacterTalk from './assets/content/character_talk.svg';
// import Background from './assets/content/background.png';

import IntroText from './components/IntroText.vue';

import MitesText from './assets/description/mites.svg';
import AphidsText from './assets/description/aphids.svg';
import CaterpillarsText from './assets/description/caterpiller.svg';
import VirusText from './assets/description/virus.svg';
import SoftrotText from './assets/description/soft-rot.svg';
import NematodeText from './assets/description/nematodes.svg';
import RootrotText from './assets/description/root-fot.svg';

import Lottie from './components/Lottie';

import Mites from './assets/lottie/mites.json';
import Aphids from './assets/lottie/aphids.json';
import Caterpillars from './assets/lottie/caterpillars.json';
import Virus from './assets/lottie/virus.json';
import Softrot from './assets/lottie/softrot.json';
import Nematode from './assets/lottie/nematode.json';
import Rootrot from './assets/lottie/rootrot.json';
import HoverRing from './assets/lottie/hoverRing.json';

Vue.use(Vue2TouchEvents);

export default {
    name: 'App',
    components: {
        IntroText,
        DesktopBaseSvg,
        TabletBaseSvg,
        MobileBaseSvg,
        // Background,
        CharacterIcon,
        CharacterTalk,
        Lottie,
        MitesText,
        AphidsText,
        CaterpillarsText,
        VirusText,
        SoftrotText,
        NematodeText,
        RootrotText,
    },
    mounted: function() {
        window.scrollTo(0, -20);
    },
    created: function() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        const scrollWidth = document.body.scrollWidth;

        if (scrollWidth <= 576) {
            this.screenSize = 'mobile';
        } else if (scrollWidth > 576 && scrollWidth < 768) {
            this.screenSize = 'tablet';
        } else if (scrollWidth >= 768 && scrollWidth <= 992) {
            this.screenSize = 'laptop';
        } else if (scrollWidth > 993) {
            this.screenSize = 'desktop';
        }
    },
    destroyed: function() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data: function() {
        return {
            hoverPosition: {
                x: '',
                y: '',
                item: null,
            },
            activeItems: [],
            activeContent: null,
            displayContent: true,
            Mites,
            Aphids,
            Caterpillars,
            Virus,
            Softrot,
            Nematode,
            Rootrot,
            HoverRing,
            screenSize: 'desktop',
        };
    },
    methods: {
        handleResize() {
            const scrollWidth = document.body.scrollWidth;
            if (scrollWidth <= 576) {
                this.screenSize = 'mobile';
            } else if (scrollWidth > 576 && scrollWidth < 768) {
                this.screenSize = 'tablet';
            } else if (scrollWidth >= 768 && scrollWidth <= 992) {
                this.screenSize = 'laptop';
            } else if (scrollWidth > 993) {
                this.screenSize = 'desktop';
            }
        },
        handleScroll() {
            const scrollY = window.scrollY;
            const scrollHeight = document.body.scrollHeight;
            const scrollWidth = document.body.scrollWidth;

            if (this.screenSize === 'desktop') {
                if (this.$refs.introText) {
                    this.$refs.introText.style.opacity = (0 - scrollY + 100) / 100;
                }

                if (scrollY < 20) {
                    this.$refs.characterIcon.style.marginLeft = '0px';
                } else if (scrollY < scrollHeight * 0.45) {
                    this.$refs.characterIcon.style.marginLeft = Math.min(scrollY * 1.2, 355) + 'px';
                } else if (scrollY >= scrollHeight * 0.45 && scrollY < scrollHeight * 0.55) {
                    this.$refs.characterIcon.style.marginLeft = Math.min(scrollY * 1.2, 355) + 'px';
                } else if (scrollY >= scrollHeight * 0.55) {
                    this.$refs.characterIcon.style.marginLeft =
                        Math.max(scrollWidth * 0.2 - (scrollY / scrollHeight - 0.55) * 100 * ((scrollWidth * 0.2) / 10), -scrollWidth * 0.2) + 'px';
                }

                if (scrollY < scrollHeight * 0.1 || scrollY > scrollHeight * 0.6) {
                    this.displayContent = false;
                } else {
                    this.displayContent = true;
                }
            } else if (this.screenSize === 'tablet' || this.screenSize === 'laptop') {
                if (scrollY < 20) {
                    this.$refs.characterIcon.style.marginLeft = '0px';
                } else if (scrollY < scrollHeight * 0.25) {
                    this.$refs.characterIcon.style.marginLeft = Math.min(scrollY * 1.2, 195) + 'px';
                } else if (scrollY >= scrollHeight * 0.25 && scrollY < scrollHeight * 0.55) {
                    this.$refs.characterIcon.style.marginLeft = Math.min(scrollY * 1.2, 195) + 'px';
                } else if (scrollY >= scrollHeight * 0.55) {
                    this.$refs.characterIcon.style.marginLeft =
                        Math.max(scrollWidth * 0.2 - (scrollY / scrollHeight - 0.55) * 100 * ((scrollWidth * 0.2) / 10), -scrollWidth * 0.2) + 'px';
                }

                if (scrollY < scrollHeight * 0.08 || scrollY > scrollHeight * 0.55) {
                    this.displayContent = false;
                } else {
                    this.displayContent = true;
                }
            } else if (this.screenSize === 'mobile') {
                if (scrollY < scrollHeight * 0.07) {
                    this.$refs.characterIcon.style.marginLeft = '0px';
                } else if (scrollY < scrollHeight * 0.15) {
                    this.$refs.characterIcon.style.marginLeft = Math.min(scrollY * 1.2, 195) + 'px';
                } else if (scrollY >= scrollHeight * 0.25 && scrollY < scrollHeight * 0.3) {
                    this.$refs.characterIcon.style.marginLeft = Math.min(scrollY * 2, 195) + 'px';
                } else if (scrollY >= scrollHeight * 0.3) {
                    this.$refs.characterIcon.style.marginLeft =
                        Math.min(scrollWidth * 0.4 - (scrollY / scrollHeight - 0.35) * 100 * ((scrollWidth * 0.2) / 10), 195) + 'px';
                }

                if (scrollY < scrollHeight * 0.1 || scrollY > scrollHeight * 0.46) {
                    this.displayContent = false;
                } else {
                    this.displayContent = true;
                }
            }
        },
        mouseOver: function(e) {
            const scrollWidth = document.body.scrollWidth;
            const scrollHeight = document.body.scrollHeight;

            const x = e.pageX;
            const y = e.pageY;

            const scrollRatioX = x / scrollWidth;
            const scrollRatioY = y / scrollHeight;

            if (this.screenSize === 'desktop') {
                if (scrollRatioX > 0.49 && scrollRatioX < 0.64 && scrollRatioY > 0.19 && scrollRatioY < 0.245) {
                    this.generateHoverData(0.56, 0.21, 'mites');
                } else if (scrollRatioX > 0.62 && scrollRatioX < 0.7 && scrollRatioY > 0.24 && scrollRatioY < 0.284) {
                    this.generateHoverData(0.63, 0.253, 'aphids');
                } else if (scrollRatioX > 0.48 && scrollRatioX < 0.61 && scrollRatioY > 0.235 && scrollRatioY < 0.32) {
                    this.generateHoverData(0.51, 0.285, 'caterpillars');
                } else if (scrollRatioX > 0.56 && scrollRatioX < 0.695 && scrollRatioY > 0.34 && scrollRatioY < 0.385) {
                    this.generateHoverData(0.6, 0.365, 'virus');
                } else if (scrollRatioX > 0.63 && scrollRatioX < 0.775 && scrollRatioY > 0.44 && scrollRatioY < 0.495) {
                    this.generateHoverData(0.7, 0.462, 'softrot');
                } else if (scrollRatioX > 0.42 && scrollRatioX < 0.557 && scrollRatioY > 0.5 && scrollRatioY < 0.61) {
                    this.generateHoverData(0.5, 0.536, 'nematode');
                } else if (scrollRatioX > 0.68 && scrollRatioX < 0.79 && scrollRatioY > 0.51 && scrollRatioY < 0.583) {
                    this.generateHoverData(0.685, 0.549, 'rootrot');
                } else {
                    this.$refs.desktopWrapper.style.cursor = "url('/cursor_default.svg'), auto";
                    this.hoverPosition = {
                        x: '',
                        y: '',
                        item: null,
                    };
                    this.$refs.hoverRing.style.display = 'none';
                }
            } else if (this.screenSize === 'laptop') {
                if (scrollRatioX > 0.31 && scrollRatioX < 0.42 && scrollRatioY > 0.26 && scrollRatioY < 0.29) {
                    this.generateHoverData(0.32, 0.273, 'mites');
                } else if (scrollRatioX > 0.42 && scrollRatioX < 0.52 && scrollRatioY > 0.29 && scrollRatioY < 0.32) {
                    this.generateHoverData(0.42, 0.308, 'aphids');
                } else if (scrollRatioX > 0.19 && scrollRatioX < 0.38 && scrollRatioY > 0.328 && scrollRatioY < 0.35) {
                    this.generateHoverData(0.23, 0.335, 'caterpillars');
                } else if (scrollRatioX > 0.36 && scrollRatioX < 0.51 && scrollRatioY > 0.38 && scrollRatioY < 0.4) {
                    this.generateHoverData(0.38, 0.392, 'virus');
                } else if (scrollRatioX > 0.46 && scrollRatioX < 0.64 && scrollRatioY > 0.46 && scrollRatioY < 0.493) {
                    this.generateHoverData(0.53, 0.471, 'softrot');
                } else if (scrollRatioX > 0.21 && scrollRatioX < 0.31 && scrollRatioY > 0.52 && scrollRatioY < 0.54) {
                    this.generateHoverData(0.2, 0.528, 'nematode');
                } else if (scrollRatioX > 0.53 && scrollRatioX < 0.63 && scrollRatioY > 0.52 && scrollRatioY < 0.56) {
                    this.generateHoverData(0.535, 0.535, 'rootrot');
                } else {
                    this.$refs.desktopWrapper.style.cursor = "url('/cursor_default.svg'), auto";
                    this.hoverPosition = {
                        x: '',
                        y: '',
                        item: null,
                    };
                    this.$refs.hoverRing.style.display = 'none';
                }
            } else if (this.screenSize === 'tablet') {
                if (scrollRatioX > 0.34 && scrollRatioX < 0.404 && scrollRatioY > 0.267 && scrollRatioY < 0.284) {
                    this.generateHoverData(0.296, 0.263, 'mites');
                } else if (scrollRatioX > 0.42 && scrollRatioX < 0.51 && scrollRatioY > 0.3 && scrollRatioY < 0.32) {
                    this.generateHoverData(0.42, 0.3, 'aphids');
                } else if (scrollRatioX > 0.21 && scrollRatioX < 0.38 && scrollRatioY > 0.33 && scrollRatioY < 0.35) {
                    this.generateHoverData(0.22, 0.325, 'caterpillars');
                } else if (scrollRatioX > 0.36 && scrollRatioX < 0.49 && scrollRatioY > 0.38 && scrollRatioY < 0.4) {
                    this.generateHoverData(0.375, 0.382, 'virus');
                } else if (scrollRatioX > 0.5 && scrollRatioX < 0.64 && scrollRatioY > 0.46 && scrollRatioY < 0.493) {
                    this.generateHoverData(0.5, 0.468, 'softrot');
                } else if (scrollRatioX > 0.1 && scrollRatioX < 0.32 && scrollRatioY > 0.53 && scrollRatioY < 0.55) {
                    this.generateHoverData(0.15, 0.525, 'nematode');
                } else if (scrollRatioX > 0.53 && scrollRatioX < 0.63 && scrollRatioY > 0.52 && scrollRatioY < 0.56) {
                    this.generateHoverData(0.535, 0.535, 'rootrot');
                } else {
                    this.$refs.desktopWrapper.style.cursor = "url('/cursor_default.svg'), auto";
                    this.hoverPosition = {
                        x: '',
                        y: '',
                        item: null,
                    };
                    this.$refs.hoverRing.style.display = 'none';
                }
            } else if (this.screenSize === 'mobile') {
                if (scrollRatioX > 0.214 && scrollRatioX < 0.36 && scrollRatioY > 0.24 && scrollRatioY < 0.259) {
                    this.generateHoverData(0.214, 0.25, 'mites');
                } else if (scrollRatioX > 0.421 && scrollRatioX < 0.58 && scrollRatioY > 0.26 && scrollRatioY < 0.28) {
                    this.generateHoverData(0.42, 0.274, 'aphids');
                } else if (scrollRatioX > 0.02 && scrollRatioX < 0.235 && scrollRatioY > 0.285 && scrollRatioY < 0.3) {
                    this.generateHoverData(0.02, 0.291, 'caterpillars');
                } else if (scrollRatioX > 0.27 && scrollRatioX < 0.53 && scrollRatioY > 0.324 && scrollRatioY < 0.35) {
                    this.generateHoverData(0.34, 0.334, 'virus');
                } else if (scrollRatioX > 0.54 && scrollRatioX < 0.78 && scrollRatioY > 0.388 && scrollRatioY < 0.402) {
                    this.generateHoverData(0.59, 0.392, 'softrot');
                } else if (scrollRatioX > 0.0 && scrollRatioX < 0.14 && scrollRatioY > 0.42 && scrollRatioY < 0.435) {
                    this.generateHoverData(0.0, 0.43, 'nematode');
                } else if (scrollRatioX > 0.6 && scrollRatioX < 0.86 && scrollRatioY > 0.43 && scrollRatioY < 0.45) {
                    this.generateHoverData(0.6, 0.436, 'rootrot');
                } else {
                    this.$refs.desktopWrapper.style.cursor = "url('/cursor_default.svg'), auto";
                    this.hoverPosition = {
                        x: '',
                        y: '',
                        item: null,
                    };
                    this.$refs.hoverRing.style.display = 'none';
                }
            }
        },
        onClick: function() {
            this.$refs.hoverRing.style.display = 'none';
            if (this.hoverPosition && this.hoverPosition.item) {
                if (!this.activeItems.find(data => data.item === this.hoverPosition.item)) {
                    this.activeItems.push({
                        item: this.hoverPosition.item,
                        x: this.hoverPosition.x,
                        y: this.hoverPosition.y,
                    });
                }
                this.activeContent = this.hoverPosition.item;
            }
        },
        hideContent: function() {
            this.activeContent = null;
        },
        generateHoverData: function(x, y, item) {
            const scrollWidth = document.body.scrollWidth;
            const scrollHeight = document.body.scrollHeight;
            this.hoverPosition = {
                x: scrollWidth * x,
                y: scrollHeight * y,
                item,
            };
            this.$refs.desktopWrapper.style.cursor = "url('/cursor_hover.svg'), auto";
            if (this.activeItems && this.activeItems.find(data => data.item === item)) {
                this.$refs.hoverRing.style.display = 'none';
            } else {
                this.$refs.hoverRing.style.display = 'block';
            }
        },
        displayAnimation: function(item) {
            const scrollWidth = document.body.scrollWidth;
            const isLaptop = scrollWidth < 1500 && scrollWidth > 1200;
            const activeItem = this.activeItems.find(data => data.item === item);
            if (activeItem) {
                return {
                    display: 'block',
                    position: 'absolute',
                    left: isLaptop ? `calc( ${activeItem.x + 16}px * 1.03)` : activeItem.x + 16 + 'px',
                    top: isLaptop ? `calc( ${activeItem.y + 16}px * 1.03)` : activeItem.y + 18.5 + 'px',
                    width: isLaptop ? '120px' : '190px',
                    height: isLaptop ? '120px' : '190px',
                    background: 'radial-gradient(50% 50% at 50% 50%, #60CFE8 87.5%, #94ECFF 96.88%)',
                    borderRadius: '100px',
                };
            } else {
                return {
                    display: 'none',
                };
            }
        },
    },
};
</script>

<style lang="scss">
@font-face {
    font-family: 'Roboto-Regular';
    src: url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'FredokaOne-Regular';
    src: url('./assets/fonts/FredokaOne-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
#app {
    font-family: 'Roboto-Regular', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    height: 100vh;
    cursor: url('/cursor_default.svg'), auto;
}
.tabletSvg,
.mobileSvg {
    display: none;
}
.svgWrapper .intro-text {
    display: none;
}
.logos {
    width: 100%;
    text-align: center;
    margin-top: -6.5%;
}
.logos img {
    height: 60px;
}
.first-logo {
    margin-right: 2.5%;
}
.second-logo {
    margin-left: 2.5%;
}
.characterIcon {
    position: fixed;
    top: 25%;
    left: -200px;
    z-index: 99999;
}
.content-wrapper {
    position: fixed;
    left: calc(100% * 0.22);
    top: 25%;
}
.hoverRing {
    width: 250px;
    height: 250px;
}
@media (max-width: 1500px) and (min-width: 1200px) {
    .content-wrapper {
        zoom: 0.8;
        left: calc(100% * 0.24);
    }
    .lottie-wrapper,
    .hoverRing {
        zoom: 0.95;
    }
    .hoverRing {
        width: 200px;
        height: 200px;
        padding: 20px;
    }
    .lottie-wrapper {
        width: 130px;
        height: 130px;
    }
}

@media (max-width: 1199px) and (min-width: 993px) {
    .content-wrapper {
        zoom: 0.8;
        left: calc(100% * 0.24);
    }
    .lottie-wrapper,
    .hoverRing {
        zoom: 0.95;
    }
    .hoverRing {
        width: 200px;
        height: 200px;
        padding: 20px;
    }
    .lottie-wrapper {
        width: 130px !important;
        height: 130px !important;
    }
    .characterIcon {
        zoom: 0.9;
        position: fixed;
        top: 25%;
        left: -280px;
    }
}
@media (max-width: 992px) {
    .desktopSvg {
        display: none;
    }
    .desktopSvg svg {
        display: none;
    }
    .main-text {
        display: none;
    }
    .logos {
        display: none;
    }
}
@media (max-width: 992px) and (min-width: 577px) {
    .tabletSvg {
        display: contents;
        position: absolute;
    }
    .characterIcon {
        zoom: 0.85;
        position: fixed;
        top: 25%;
        left: -200px;
    }

    .content-wrapper {
        zoom: 0.8;
        left: calc(100% * 0.24);
    }
    .lottie-wrapper {
        zoom: 1;
    }
    .hoverRing {
        width: 150px;
        height: 150px;
        padding: 20px;
    }
    .lottie-wrapper {
        width: 130px !important;
        height: 130px !important;
    }
}

@media (max-width: 576px) {
    .mobileSvg {
        display: contents;
        position: absolute;
    }
    .characterIcon {
        zoom: 0.7;
        position: fixed;
        top: 25%;
        left: -200px;
    }

    .content-wrapper {
        zoom: 0.8;
        left: calc(100% * 0.24);
    }
    .lottie-wrapper {
        zoom: 1;
    }
    .hoverRing {
        width: 150px;
        height: 150px;
        padding: 20px;
    }
    .lottie-wrapper {
        width: 120px !important;
        height: 120px !important;
    }
}

.svgBackground {
    position: absolute;
    top: 0;
}
</style>
