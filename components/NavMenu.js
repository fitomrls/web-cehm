Vue.component("nav-menu", {
template: /*html*/ `
<div class="nav-menu">
    <div class="nav-content">
        <div class="menu">
            <a href="#" class="logo">
                <img src="images/nav-logo.svg" alt="">
            </a>
            <nav role="navigation" class="primary-navigation">
                <ul>
                    <li>
                        <a href="#">Nuestro Camino &dtrif;</a>
                        <ul class="dropdown">
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="https://www.edmundorice.net" target="_blank">Rice/HH.CC</a></li>
                            <template v-if="page=='index.html'">
                                <li><a href="#" v-scroll-to="{el: '#historia'}">Historia</a></li>
                                <li><a href="#" v-scroll-to="{el: '#equipo'}">Equipo</a></li>
                                <li><a href="voluntariado.html">Voluntariado</a></li>
                                <li><a href="#" v-scroll-to="{el: '#erebb'}">EREBB</a></li>
                            </template>
                            <template v-else>
                                <li><a href="index.html#historia">Historia</a></li>
                                <li><a href="index.html#equipo">Equipo</a></li>
                                <li><a href="voluntariado.html">Voluntariado</a></li>
                                <li><a href="index.html#erebb">EREBB</a></li>
                            </template>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Nuestro Sueño &dtrif;</a>
                        <ul class="dropdown">
                            <template v-if="page=='index.html'">
                                <li><a href="#" v-scroll-to="{el: '#mision'}">Visi&oacute;n</a></li>
                                <li><a href="#" v-scroll-to="{el: '#vision'}">Misi&oacute;n</a></li>
                                <li><a href="#" v-scroll-to="{el: '#valores'}">Valores</a></li>
                                <li><a href="#" v-scroll-to="{el: '#proteccion'}">Pol&iacute;tica de Protecci&oacute;n</a></li>
                            </template>
                            <template v-else>
                                <li><a href="index.html#mision">Visi&oacute;n</a></li>
                                <li><a href="index.html#vision">Misi&oacute;n</a></li>
                                <li><a href="index.html#valores">Valores</a></li>
                                <li><a href="index.html#proteccion">Pol&iacute;tica de Protecci&oacute;n</a></li>
                            </template>
                        </ul>
                    </li>
                    <li>
                        <a href="areas-accion.html">&Aacute;reas de Acci&oacute;n &dtrif;</a>
                        <ul class="dropdown">
                        <li><a href="areas-accion.html#personal">Desarrollo Personal</a></li>
                        <li><a href="areas-accion.html#familiar">Acompañamiento Familiar</a></li>
                        <li><a href="areas-accion.html#educativo">Acompañamiento Educativo</a></li>
                        <li><a href="areas-accion.html#tecnica">Promoci&oacute;n y Capaticaci&oacute;n T&eacute;cnica</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Ejes &dtrif;</a>
                        <ul class="dropdown">
                            <li><a href="ejes-accion.html#bdigital">Brecha Digital</a></li>
                            <li><a href="ejes-accion.html#aclima">Acci&oacute;n por el Clima</a></li>
                            <li><a href="ejes-accion.html#egenero">Equidad de G&eacute;nero</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="galeria.html">Galeria Anual &dtrif;</a>
                        <ul class="dropdown">
                            <li><a href="galeria-anual.html?year=2022">2022</a></li>
                            <li><a href="galeria-anual.html?year=2021">2021</a></li>
                            <li><a href="galeria-anual.html?year=2020">2020</a></li>
                            <li><a href="galeria-anual.html?year=2019">2019</a></li>
                            <li><a href="#">Cifras</a></li>
                            <li><a href="#">Boletines</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
                
        <a href="voluntariado.html" class="contact">
                <img src="images/flagbol.svg" alt="flag bolivia">
                &Uacute;nete
            </a>
        </div>
        <div :class="toggleCls" @click="toggle"></div>
        <ul :class="navigation">
            <li class="submenu">
                <label for="way"><span>Nuestro Camino</span></label>
                <input type="checkbox" id="way">
                <ul class="slide">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="https://www.edmundorice.net" target="_blank">Rice/HH.CC</a></li>
                    <template v-if="page=='index.html'">
                        <li><a href="#" v-scroll-to="{el: '#historia'}">Historia</a></li>
                        <li><a href="#" v-scroll-to="{el: '#equipo'}">Equipo</a></li>
                        <li><a href="voluntariado.html">Voluntariado</a></li>
                        <li><a href="#" v-scroll-to="{el: '#erebb'}">EREBB</a></li>
                    </template>
                    <template v-else>
                        <li><a href="index.html#historia">Historia</a></li>
                        <li><a href="index.html#equipo">Equipo</a></li>
                        <li><a href="index.html#erebb">EREBB</a></li>
                    </template>
                </ul>
            </li>
            <li class="submenu">
                <label for="cbox"><span>Nuestro Sueño</span></label>
                <input type="checkbox" id="cbox">
                <ul class="slide">
                    <li><a href="#" v-scroll-to="{el: '#mision', onDone: onDone}">Visi&oacute;n</a></li>
                    <li><a href="#" v-scroll-to="{el: '#vision', onDone: onDone}">Misi&oacute;n</a></li>
                    <li><a href="#" v-scroll-to="{el: '#valores', onDone: onDone}">Valores</a></li>
                    <li><a href="#" v-scroll-to="{el: '#proteccion', onDone: onDone}">Pol&iacute;tica de Protecci&oacute;n</a></li>
                </ul>
            </li>
            <li class="submenu">
                <label for="areas"> <span>&Aacute;reas de Acci&oacute;n</span></label>
                <input type="checkbox" id="areas">
                <ul class="slide">
                    <li><a href="areas-accion.html#personal">Desarrollo Personal</a></li>
                    <li><a href="areas-accion.html#familiar">Acompañamiento Familiar</a></li>
                    <li><a href="areas-accion.html#educativo">Acompañamiento Educativo</a></li>
                    <li><a href="areas-accion.html#tecnica">Promoci&oacute;n y Capaticaci&oacute;n T&eacute;cnica</a></li>
                </ul>
            </li>
            <li class="submenu">
                <label for="ejes"> <span>Ejes</span></label>
                <input type="checkbox" id="ejes">
                <ul class="slide">
                    <li><a href="ejes-accion.html#egenero">Equidad de G&eacute;nero</a></li>
                    <li><a href="ejes-accion.html#aclima">Acci&oacute;n por el Clima</a></li>
                    <li><a href="ejes-accion.html#bdigital">Brecha Digital</a></li>
                </ul>
            </li>
            <li class="submenu">
                <label for="gal"> <span>Galeria Anual</span></label>
                <input type="checkbox" id="gal">
                <ul class="slide">
                    <li><a href="galeria-anual.html?year=2022">2022</a></li>
                    <li><a href="galeria-anual.html?year=2021">2021</a></li>
                    <li><a href="galeria-anual.html?year=2020">2020</a></li>
                    <li><a href="galeria-anual.html?year=2019">2019</a></li>
                    <li><a href="#">Cifras</a></li>
                    <li><a href="#">Boletines</a></li>
                </ul>
            </li>
        </ul>
</div>
    `,
    data() {
        return {
            navigation: "navigation",
            toggleCls: "toggle",
            page: ''
        }
    },
    methods: {
        toggle(){
            if(this.navigation==='navigation'){
            this.navigation = "navigation active";
            this.toggleCls = "toggle active";
            }else{
            this.navigation = "navigation";
            this.toggleCls = "toggle";
            }
        },
        onDone(){
            this.navigation = "navigation";
            this.toggleCls = "toggle";
        },
    },
    created () {
        this.page = window.location.pathname.split("/").pop();
    },
  });
  