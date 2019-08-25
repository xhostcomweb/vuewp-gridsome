<template>
  <Layout>
  <!-- Icon Features section -->
            <section id="start" class="section is-transparent is-relative">
                <!-- Container -->
                <div class="container">
                  <!-- Content wrapper -->
                    <div class="content-wrapper is-medium">
                   
                <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
                    <div class="column">
                        <form class="box">
                            <div class="field has-text-centered">
                                <img src="../assets/img/logo.jpg" width="300">
                            </div>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control has-icons-left">
                                    <input type="email" class="input" placeholder="e.g. hkakehas@cisco.com">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control has-icons-left">
                                    <input type="password" class="input" placeholder="*********" required>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox">
                                    Remember me
                                </label>
                            </div>
                            <div class="field">
                                <button class="button is-info">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
              </div>

                   </div>
                    <!-- Content wrapper -->
                
                <!-- /Container -->
            </section>
            

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>
