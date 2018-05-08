---
title: Home
template: home
list:
  - of
  - things
  - here
id: db0ae4e3-4f10-4802-bc40-0b880cbf02c7
---
<div class="feature-lead white">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 text-contents">
                <h2>Succesvol ondernemen op het internet begint met hosting van Renaissance.</h2>
                <p>
                    Verkoopt u uw producten via het internet? Of wilt u uw producten nóg beter online promoten? Dan is een .shop-domeinnaam een absolute must.
                </p>
            </div>
            <div class="col-sm-6">
                <img class="img-fluid" src="http://www.openstack.org/themes/openstack/images/control-your-cloud.svg">
            </div>
        </div>
        <!-- .row -->
    </div>
    <!-- .container -->
</div>
<!-- .feature-lead -->

<div class="feature-lead echo">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 text-center">
                <h2>Maak kennis met onze hosting pakketten</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, id incidunt? Explicabo illo laboriosam temporibus.</p>
            </div>
        </div>
        <div class="row">
        {{ collection:webhosting_packages }}
            <div class="col-xs-12 col-sm-4">
                <table class="table table-borderless price-table with-shadow">
                    <tbody>
                        <tr>
                            <td class="{{ colorset }} lighten text-center title">
                                <h2>{{ title }}</h2>
                            </td>
                        </tr>
                        <tr>
                            <td class="{{ colorset }} text-center description">
                                <em>{{ subtitle }}</em>
                            </td>
                        </tr>
                        <tr>
                            <td class="white">
                                <ul class="fa-ul mt15">
                                {{ features }}
                                  <li>
                                    <i class="fa fa-li fa-check" aria-hidden="true"></i>
                                    {{ value }}
                                  </li>
                                {{ /features }}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td class="white text-center">
                                {{ if sales_price }}
                                  <span style="font-size: 15px; font-weight: bold; text-decoration: line-through">
                                    &euro; {{ price }}
                                  </span>
                                  <span style="font-size: 25px; font-weight: bold">
                                    &euro; {{ sales_price }}
                                  </span>
                                {{ else }}
                                  <span style="font-size: 25px; font-weight: bold">
                                    &euro; {{ price }}
                                  </span>
                                {{ /if }}
                            </td>
                        </tr>
                        <tr>
                            <td class="white">
                                <a class="btn btn-success btn-lg btn-block">
            <i class="fa fa-shopping-cart"></i> Bestel</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          {{ /collection:webhosting_packages }}
            <div class="col-xs-12 text-right">
                <small>
    <sup>*</sup> Op deze hoeveelheid is een fair-use policy van toepassing</small>
            </div>
        </div>
    </div>
</div>
