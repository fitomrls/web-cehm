Vue.component("my-footer", {
    template: /*html*/ `
    <footer>
            <div class="content">
                <div class="col">
                    <div class="social">
                        <a class="social-logo" href="#" v-scroll-to="{el: '#home'}">
                            <img src="images/logo.svg" alt="logo cehm" width="300">
                        </a>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/erlatam/" target="_blank">
                                    <img src="/images/icons/facebook.svg" alt="facebook-icon">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/erlatam" target="_blank">
                                    <img src="/images/icons/twitter.svg" alt="twitter-icon">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/erlatam" target="_blank">
                                    <img src="/images/icons/instagram.svg" alt="instagram-icon">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCzmpn_qnLXG6J3F6XjzuGoA/videos" target="_blank">
                                    <img src="/images/icons/youtube.svg" alt="youtube-icon">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/christianbrothers/" target="_blank">
                                    <img src="/images/icons/linkedin.svg" alt="linkedin-icon">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="center">
                        <ul class="links">
                            <li>
                                <a href="#" v-scroll-to="{el: '#about'}">
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#" v-scroll-to="{el: '#areas'}">
                                    &Aacute;reas
                                </a>
                            </li>
                            <li>
                                <a href="#" v-scroll-to="{el: '#proteccion'}">
                                    Protecci&oacute;n Infantil
                                </a>
                            </li>
                            <li>
                                <a href="https://cehm.blogspot.com">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" v-scroll-to="{el: '#edmundo'}">
                                    Edmundo Rice
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col horario">
                    <div class="center">
                        <h3>Horario de Atenci&oacute;n</h3>
                        <p>Lunes a Viernes</p>
                        <ul class="hrs">
                            <li>9:00 am - 12:30 pm</li>
                            <li>3:00 pm - 06:30 pm</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="dev">Dev&Desing {{currentYear}} &copy;</div>
        </footer>
        `,
        data() {
            return {
                currentYear: new Date().getFullYear(),
            }
        }  
      });
      