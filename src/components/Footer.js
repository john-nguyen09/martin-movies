import logoWhite from '../images/logo-white.png';

export default function Footer() {
  return (
    <footer class="footer bg-dark">
      <div class="footer-widget-area py-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget widget-blog widget_text">
                {' '}
                <div class="textwidget">
                  <p>
                    <img
                      loading="lazy"
                      class="alignnone wp-image-93"
                      src={logoWhite}
                      alt=""
                      width="110"
                      height="28"
                    />
                  </p>
                  <p class="nomargin">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque, ducimus, atque. Praesentium suscipit provident
                    explicabo dignissimos nostrum numquam deserunt earum
                    accusantium et fugit.
                  </p>
                </div>
              </div>{' '}
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget widget-blog widget_tp_widget_recent_tweets">
                <h4 class="widget-title">Twitter Feed</h4>
                <div class="tp_recent_tweets">
                  <ul>
                    <li>
                      <span>
                        Electronics Store eCommerce WooCommerce Elementor Theme.{' '}
                        <a href="." title="Search #ecommerce" target="_blank">
                          #ecommerce
                        </a>{' '}
                        <a href="." title="Search #wordpress" target="_blank">
                          #wordpress
                        </a>{' '}
                        <a href="." title="Search #woocommerce" target="_blank">
                          #woocommerce
                        </a>{' '}
                        <a href="." title="Search #electronics" target="_blank">
                          #electronics
                        </a>{' '}
                        <a href="." title="Search #tools" target="_blank">
                          #tools
                        </a>
                        … <a href=".">https://t.co/fejbhJzBWg</a>
                      </span>
                      <a class="twitter_time" href=".">
                        20 days ago
                      </a>
                    </li>
                  </ul>
                </div>
              </div>{' '}
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget widget-blog widget_nav_menu">
                <h4 class="widget-title">Useful Links</h4>
                <div class="menu-footer-top-container">
                  <ul id="menu-footer-top" class="menu">
                    <li
                      id="menu-item-587"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-587"
                    >
                      <a href=".">About Movify</a>
                    </li>
                    <li
                      id="menu-item-588"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-588"
                    >
                      <a href=".">Blog</a>
                    </li>
                    <li
                      id="menu-item-590"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-590"
                    >
                      <a href=".">Contact Us</a>
                    </li>
                    <li
                      id="menu-item-589"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-589"
                    >
                      <a href=".">Testimonials</a>
                    </li>
                    <li
                      id="menu-item-591"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-591"
                    >
                      <a href=".">Error 404</a>
                    </li>
                  </ul>
                </div>
              </div>{' '}
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="widget widget-blog null-instagram-feed">
                <h4 class="widget-title">Instagram</h4>Instagram has returned
                invalid data.
                <p class="clear">
                  <a href="." rel="me" class="">
                    Follow Us!
                  </a>
                </p>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright-area py-30">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex">
                <div class="links">
                  <ul id="menu-footer-menu" class="list-inline">
                    <li class="list-inline-item menu-item menu-item-type-custom menu-item-object-custom">
                      <a href=".">Privacy &amp; Cookies</a>
                    </li>
                    <li class="list-inline-item menu-item menu-item-type-custom menu-item-object-custom">
                      <a href=".">Terms &amp; Conditions</a>
                    </li>
                    <li class="list-inline-item menu-item menu-item-type-custom menu-item-object-custom">
                      <a href=".">Legal Disclaimer</a>
                    </li>
                    <li class="list-inline-item menu-item menu-item-type-custom menu-item-object-custom">
                      <a href=".">Community</a>
                    </li>
                  </ul>{' '}
                </div>

                <div class="copyright ms-auto">
                  Copyright 2020.KlbTheme . All rights reserved{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
