<template>
  <Layout>
      <section class="hero is-fullheight is-transparent">
            <!-- Hero Image and Title -->
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-vcentered">
                             <!-- Landing page Title -->
                            <div class="column is-5 landing-caption">
                                <h1 class="title is-1 is-light is-semibold is-spaced main-title">Vue Wordpress Gridsome</h1>
                                <h2 class="subtitle is-6 is-light is-thin">
                                    Vue JS &amp; Wordpress brought to the next level. Subscribe to newsletter for updates.
                                </h2>
                                <!-- CTA -->
                                <p>
                                    <a href="https://github.com/xhostcomweb/vuewp-gridsome.git" class="button k-button k-primary raised has-gradient is-fat is-bold">
                                        <span class="text">Get Started</span>
                                        <span class="front-gradient"></span>
                                    </a>
                                </p>
        
                            </div>
                            <!-- Hero image -->
                            <div class="column is-7">
                                <figure class="image">
                                    <img src="../assets/images/illustrations/buildings.svg" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
        
                <!-- Hero footer -->
                <div class="hero-foot">
                    <div class="container has-text-centered">
                           <div class="column is-12 is-centered">
                                 <br /><br /><br />
                                <h4 class="title is-1 is-light is-semibold is-spaced main-title">Jamstack Build</h4>
                                <h2 class="subtitle is-6 is-light is-thin">
                                    Use any API, Framework and deploy to Netlify, AWS Amplify, Zeit Now, Amazon S3 and more.
                                </h2>
                                </div>
                        <div class="tabs is-centered">
                            <!-- Client / partner list -->
                            <ul>
                                <li><a><img class="hero-logo" src="../assets/images/clients/cryptomarket.svg" alt=""></a></li>
                                <li><a><img class="hero-logo" src="../assets/images/clients/bitit.svg" alt=""></a></li>
                                <li><a><img class="hero-logo" src="../assets/images/clients/coin.svg" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /Landing page Hero -->
        
            <!-- Icon Features section -->
            <section id="start" class="section is-transparent is-relative">
                <!-- Container -->
                <div class="container">
                  <!-- Content wrapper -->
                    <div class="content-wrapper is-medium">
                        <div class="columns is-vcentered">
                          
                            <!-- Feature -->
                            <div class="column is-4">
                                <div class="feature">
                                    <img src="../assets/images/icons/chained.svg" alt="" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                    <h4 class="title is-6 is-tight is-light">Routing</h4>
                                    <p>Superfast routing with g-link, drop down menus, slide in menus, full screen menus etc.</p>
                                </div>
                            </div>
                            <!-- Feature -->
                            <div class="column is-4">
                                <div class="feature">
                                    <img src="../assets/images/icons/stacked.svg" alt="" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                    <h4 class="title is-6 is-tight is-light">CMS</h4>
                                    <p>Any Headless CMS, Contentful, WordPress, Drupal, Sanity.io, etc.</p>
                                </div>
                            </div>
                            <!-- Feature -->
                            <div class="column is-4">
                                <div class="feature">
                                    <img src="../assets/images/icons/compact.svg" alt="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                    <h4 class="title is-6 is-tight is-light">Data</h4>
                                    <p>Any APIs, Databases, AirTable, YAML, CSV, JSON, etc.</p>
                                </div>
                            </div>
                        </div>
                         </div>
                    <!-- Content wrapper -->
                </div>
                <!-- /Container -->
            </section>
            

</Layout>
</template>
<script>
export default {
      head () {
        return {
          title: `Gridsome Vue Wordpress`,
          metaInfo: [
            {
              hid: 'description',
              name: 'description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:title',
              content: 'Gridsome Vue'
            },
            {
              property: 'og:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:type',
              content: 'post'
            },
            {
              name: 'twitter:title',
              content: 'Gridsome Vue'
            },
            {
              name: 'twitter:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            }
          ]
        }
      }
    }
</script>
<style>
.container {
width:90%;
}
</style>
