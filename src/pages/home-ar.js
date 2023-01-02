import React from "react";

const HomeAr = () => {
  return (
    <>
      {/* Start Social media Buttons */}
      <a className="Whatsapp-conact" href="https://wa.me/+201200777738">
        <i className="fa-brands fa-whatsapp" />
      </a>
      <a className="phone-conact" href="tel:+201200777738">
        <i className="fa fa-phone" />
      </a>
      {/* End Social media Buttons */}
      {/*=========== BEGIN HEADER SECTION ================*/}
      <header id="header">
        {/* BEGIN MENU */}
        <div className="menu_area">
          <nav
            className="navbar navbar-default navbar-fixed-top"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header">
                {/* FOR MOBILE VIEW COLLAPSED BUTTON */}
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a
                  title="Choose english"
                  className="icon-lang"
                  href="/"
                >
                  <button>En</button>
                </a>
                {/* LOGO */}
                {/* TEXT BASED LOGO */}
                <a className="navbar-brand" href="/Ar">
                  <img src="images/icons/logo.png" alt="logo" />
                  <span>إشفاء</span>
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul
                  id="top-menu"
                  className="nav navbar-nav navbar-right main-nav"
                >
                  <li title="Choose english" className="lang-earth">
                    <a href="/">
                      <p>Choose english </p>
                      <img src="./images/icons/lang.ico" alt="lang.icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#sliderArea">الصفحة الرئيسية</a>
                  </li>
                  <li>
                    <a href="#about">من نحن</a>
                  </li>
                  <li>
                    <a href="#meetDoctors ">البرامج</a>
                  </li>
                  <li>
                    <a href="#service">الخدمات</a>
                  </li>
                  <li>
                    <a href="#whychooseSection">لماذا اشفاء</a>
                  </li>
                  <li>
                    <a href="#counterSection">شركاء النجاح</a>
                  </li>
                  <li>
                    <a href="#homeBLog">مقالات</a>
                  </li>
                  <li>
                    <a href="#footer">تواصل معنا</a>
                  </li>
                  {/* <li><a href="#"><i class="fa-solid fa-globe"></i></a></li> */}
                </ul>
              </div>
              {/*/.nav-collapse */}
            </div>
          </nav>
        </div>
        {/* END MENU */}
      </header>
      {/*=========== END HEADER SECTION ================*/}
      {/*=========== BEGIN SLIDER SECTION ================*/}
      <section id="sliderArea">
        {/* Start slider wrapper */}
        <div className="top-slider">
          {/* Start Cover slide */}
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-00.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-01.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-02.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-03.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-04.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-05.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-06.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-07.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-08.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-09.WebP" alt="cover-img" />
            </div>
          </div>
          <div className="top-slide-inner">
            <div className="slider-img">
              <img src="images/cover/cover-10.WebP" alt="cover-img" />
            </div>
          </div>
          {/* End Cover slide */}
        </div>
        {/* /top-slider */}
      </section>
      {/*=========== END SLIDER SECTION ================*/}
      <section className="about">
        <div className="container">
          <div className="content">
            <div className="box">
              <div className="section-heading">
                <h2>حول إشفاء</h2>
                <div className="line" />
                <p>
                  إشفاء هي عبارة عن منصة رعاية صحية رقمية متخصصة في إدارة
                  الحالات وتنسيق الرعاية لخدمات الرعاية الصحية المختلفة ، لتقديم
                  خدمات رعاية صحية متكاملة ، تم تأسيسها لتكون رفيقك الطبي في
                  رحلتك للتعافي من الألف إلى الياء ، للحصول على أفضل إدارة
                  لتجربة المريض (PEM) والاستمتاع بالرعاية التي تركزعلى الشخص
                  (PCC) مع الامتثال لمعايير جودة الرعاية الصحية الدولية ، والتي
                  يديرها فريق دعم عملاء طبي محترف ومدرب تدريباً عالياً. تقدم
                  إشفاء برامج رعاية صحية مخصصة لأنواع مختلفة من العملاء ،
                  المنظمات والشركات الناشئة ومنظمات العمل المدني ، تقدم خدمات
                  الرعاية الصحية المنزلية الرقمية المتكاملة ، والتطبيب عن بعد
                  وخدمات الرعاية الصحية في الموقع لمواقع الشركات ، بالإضافة إلى
                  خدمات الرعاية الصحية الأخرى من خلال شبكات طبية ضخمة مع شركات
                  مقدمي الرعاية الصحية الشريكة (أكثر من 4500 مقدم خدمة) ، تغطي
                  جميع المحافظات في مصر وقريبا في المملكة العربية السعودية.
                </p>
              </div>
            </div>
            <div id="about" className="row-box">
              <div className="box">
                <div className="vision">
                  <div className="section-heading">
                    <h2>رؤيتنا</h2>
                    <div className="line" />
                    <p>
                      أن نكون أفضل منصة خدمات رعاية صحية رقمية في منطقة الشرق
                      الأوسط وشمال إفريقيا ، مما يتيح الوصول الرقمي إلى خدمات
                      رعاية صحية متكاملة بجودة عالية وبتكلفة معقولة
                    </p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="mission">
                  <div className="section-heading">
                    <h2>رسالتنا</h2>
                    <div className="line" />
                    <p>
                      توفير أفضل إدارة لتجربة المريض ورعاية تتمحور حول الشخص من
                      خلال إدارة الحالة المهنية وتنسيق الرعاية وفقًا لأعلى
                      معايير جودة الرعاية الصحية
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-heading">
              <h2>قيمنا</h2>
              <div className="line line-values" />
            </div>
            <div className="row-box">
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">الجودة والإحترافية</h2>
                  <div className="line" />
                  <p>
                    نهجنا الرئيسي في قيادة أعمالنا هو من خلال القيادة عالية
                    الجودة ، لتقديم أعلى جودة بأفضل الأسعار المعقولة ، بطريقة
                    احترافية عالية من خلال فريق دعم طبي محترف ومدرب جيدًا.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">التعاطف والرحمة</h2>
                  <div className="line" />
                  <p>
                    نحن نهتم بعملائنا مثل عائلاتنا ، ونتفهم ونشارك مشاعرهم
                    وآلامهم ، بالشفقة والقلق على معاناتهم أو مصائبهم.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="section-heading">
                  <h2 className="h2-box">
                    الرعاية المرتكزة حول الشخص <br /> إدارة تجربة المريض
                  </h2>
                  <div className="line" />
                  <p>
                    عملائنا هم جوهر تركيزنا ، فنحن نقدم أفضل إدارة لكل رحلة عميل
                    في جميع نقاط الإتصال من البداية إلى النهاية ، للوصول إلى
                    أعلى مستوى من رضاء العملاء.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== BEGIN Top Feature SECTION ================*/}
      <section id="topFeature">
        <div className="row">
          {/* Start Single Top Feature */}
          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="single-top-feature">
                <span className="fa-solid fa-download" />
                <h3>الملف التعريفي</h3>
                <p>
                  يمكنك الآن التعرف على جميع خدماتنا وبرامجنا بشكل مفصّل، قم
                  بتحميل الملف التعريفي الخاص بإشفاء..
                </p>
                <div className="readmore_area">
                  <a
                    href="https://drive.google.com/file/d/1MTxyW0dH0xzlMFRHKVeEXCgmDUJVc9st/view?usp=drivesdk"
                    target="_blank"
                    data-hover="الملف التعريفي"
                  >
                    <span>الملف التعريفي</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Top Feature */}
          {/* Start Single Top Feature */}
          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="single-top-feature opening-hours">
                <iframe
                  className="video-youtube"
                  src="https://www.youtube.com/embed/evR7hcvyjCM"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          {/* End Single Top Feature */}
          {/* Start Single Top Feature */}
          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="single-top-feature">
                <span className="fa-solid fa-house-medical-circle-check" />
                <h3>إستمارة الحجز</h3>
                <p>
                  فقط بضغطة زر واحدة <br />
                  يمكنك الحصول على كل خدماتك للرعاية الصحية المتكاملة، في أفضل
                  وأكبر المراكز الطبية، أو في المنزل <br />
                  احجز خدمتك الآن..من إشفاء
                </p>
                <div className="readmore_area">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc7cZv482uTvTS8dOB8JiGcxfXESGp6TH8FAHWV700Cn3BHyA/viewform"
                    data-hover="الحجز"
                  >
                    <span>الحجز</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Top Feature */}
        </div>
      </section>
      {/*=========== END Top Feature SECTION ================*/}
      {/*=========== BEGAIN Why Choose Us SECTION ================*/}
      <section id="whychooseSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="service-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>لماذا إشفاء؟</h2>
                  <div className="line" />
                </div>
              </div>
            </div>
            <div className="why-eshfaa col-lg-12 col-md-12">
              <div className="project-card">
                <div className="info">
                  <p>
                    فريق دعم طبي من ذوي الخبرة المدربين تدريباً جيداً ،
                    المحترفين في إدارة الحالات وتنسيق الرعاية
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    متخصصو الرعاية الصحية المؤهلين تأهيلاً عالياً والمختارين
                    بعناية من الأطباء وأخصائيي العلاج الطبيعي والصيادلة
                    والممرضات والكيميائيين والفنيين.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    شبكة طبية قوية وواسعة الانتشار تضم أكثر من4500 مقدم خدمات
                    تغطي جميع المحافظات ، بما في ذلك المستشفيات الكبيرة والمراكز
                    الطبية والعيادات والمختبرات ومراكز الأشعة وسلاسل الصيدليات
                    العملاقة.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    تطبيق أعلى معايير جودة الرعاية الصحية لتقديم الخدمة وإدارة
                    الحالات وتنسيق الرعاية لضمان أفضل إدارة لتجربة المريض لتحقيق
                    رعاية تتمحور حول الشخص.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    التركيز على القيمة للعملاء ، وتقديم المزيد من الفوائد
                    والتكاليف الأقل لضمان رعاية قائمة على القيمة.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    توفير برامج خدمات رعاية صحية متكاملة ، تجمع بين جميع الخدمات
                    الطبية اللازمة في مكان واحد ، سواء في المنزل أو في الموقع أو
                    في مقرات الرعاية الصحية المختلفة.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    رقمنة خدمات الرعاية الصحية ، مع نظام غير ورقي لإدارة الحالات
                    من خلال السجلات الطبية الإلكترونية (EMR) ، مع نظام إدارة
                    معلومات الرعاية الصحية المختص (HIMS) ، مما يضمن الأمان
                    والخصوصية.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    الاشتراك في برامج إشفاء مجاني ، بدون أي اشتراكات سنوية أو
                    شهرية ، دون الدفع لبطاقات الخصم ، ادفع فقط مقابل الخدمة
                    المطلوبة مع أعلى الخصومات المتوفرة.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    تغطية جميع أفراد الأسرة دون استثناء أي قريب ، وتغطية جميع
                    الأعمار دون قيود على العمر ، وتغطية جميع الأمراض دون حصر لأي
                    حالة طبية أو حالة صحية مزمنة، والاستفادة من جميع الأدوية
                    المطلوبة دون قيود أو موافقات مسبقة ، والتمتع بنظام إدارة
                    الرعاية الصحية الرقمية غير الورقي.
                  </p>
                </div>
              </div>
              <div className="project-card">
                <div className="info">
                  <p>
                    الاستفادة من جميع طرق الدفع الآمن من خلال بوابة الدفع
                    الرقمية{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== END Why Choose Us SECTION ================*/}
      {/*=========== BEGAIN Programs SECTION ================*/}
      <section id="meetDoctors">
        <div id="programs" className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="meetDoctors-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>تعرف على برامج إشفاء</h2>
                  <div className="line" />
                </div>
                <div className="doctors-area">
                  <ul className="doctors-nav">
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_1()">
                          <figure>
                            <img
                              src="images/programs/programs-01.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_1()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_2()">
                          <figure>
                            <img
                              src="images/programs/programs-02.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_2()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_3()">
                          <figure>
                            <img
                              src="images/programs/programs-03.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_3()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_4()">
                          <figure>
                            <img
                              src="images/programs/programs-04.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_4()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_5()">
                          <figure>
                            <img
                              src="images/programs/programs-05.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_5()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_6()">
                          <figure>
                            <img
                              src="images/programs/programs-06.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_6()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_7()">
                          <figure>
                            <img
                              src="images/programs/programs-07.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_7()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_8()">
                          <figure>
                            <img
                              src="images/programs/programs-08.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_8()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_9()">
                          <figure>
                            <img
                              src="images/programs/programs-09.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_9()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor btn-show" onclick="show_pup_10()">
                          <figure>
                            <img
                              src="images/programs/programs-10.WebP"
                              alt="programs-img"
                            />
                            <svg preserveAspectRatio="none"></svg>
                            <figcaption>
                              <button
                                className="btn-show"
                                onclick="show_pup_10()"
                              >
                                View
                              </button>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== Start Programs card.open SECTION ================*/}
      <div className="doctors-card">
        <div className="card" id="pup_1">
          <button type="button" className="close" onclick="hide_pup_1()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-01.WebP"
            alt=""
          />
          <h2>Eshfaa Plus for companies</h2>
          <p>
            الموظف المنتج هو كنز حقيقي في الشركة يجب الحفاظ عليه ، فوجوده هو
            خطوة لضمان حياة إنتاجية أطول للشركة ، لذلك فإن الأولوية الأولى
            للإنتاجية هي صحة جيدة لعقل منتِج مركّز دون إزعاج الأمراض التي يعطل
            استمرارية عطائه. لكل ذلك نقدم: برنامج إشفاء للشركات ، وهو برنامج طبي
            للشركات الصغيرة والمتوسطة والشركات الناشئة ، لدعم موظفيهم وعائلاتهم
            بخدمات مخفضة عند الطلب ، بدون رسوم اشتراك سنوية أو شهرية أو بطاقات
            خصم.
          </p>
          <button className="btn-close" onclick="hide_pup_1()">
            Close
          </button>
        </div>
        <div className="card" id="pup_2">
          <button type="button" className="close" onclick="hide_pup_2()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-02.WebP"
            alt=""
          />
          <h2>Eshfaa on-site</h2>
          <p>
            هل تبحث عن مقدم خدمة رعاية صحية مؤهل تأهيلاً عاليًا في الموقع؟ اكتشف
            برنامج الرعاية الصحية في الموقع: "إشفاء لخدمات المواقع" المصمم
            خصيصًا للشركات والمصانع التي لديها مواقع عمل إما في المناطق القريبة
            أو النائية ، حيث يمكننا تقديم خدمات رعاية صحية مهنية رقمية متكاملة ،
            بدءًا من إنشاء عيادات في الموقع ، وتجهيزها بالمعدات والأدوية
            المطلوبة ، ثم التوظيف في الموقع الأطباء (DOS) والممرضات ، والاستفادة
            من خدمات الأشعة والمختبرات المحمولة ، وتعزيز بيئة العمل وخدمات
            العلاج الطبيعي في الموقع ، حتى إنشاء وحدات كاملة للطب عن بعد مدعومة
            بسيارات الإسعاف الرقمية أو الطائرات ، وتطبيق أعلى معايير الجودة ISO
            45001/2018 للرعاية الصحية والسلامة المهنية لأنظمة الإدارة ، مع
            موظفين مدربين تدريباً جيداً.
          </p>
          <button className="btn-close" onclick="hide_pup_2()">
            Close
          </button>
        </div>
        <div className="card" id="pup_3">
          <button type="button" className="close" onclick="hide_pup_3()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-03.WebP"
            alt=""
          />
          <h2>Eshfaa charity</h2>
          <p>
            هل لديك مؤسسة خيرية أو تعمل مع منظمة غير حكومية مهتمة بدعم الحالات
            الطبية؟ اكتشف برنامج "إشفاء للمنظمات الخيرية والمجتمعية" هذا
            البرنامج مصمم خصيصًا للجمعيات الخيرية والمنظمات غير الحكومية التي
            تخدم الحالات الفقيرة التي تحتاج إلى خدمات طبية وجراحية مختلفة في
            مختلف المحافظات، لدعم حالاتهم الطبية بأفضل إدارة للحالات وتنسيق
            الرعاية بأعلى جودة وأقل الأسعار المتاحة وأعلى الخصومات ، لحفظ
            التبرعات والسماح للحالات الفقيرة بتحقيق أفضل إدارة لتجربة المريض
            مثلها مثل الأغنياء ، لأن صحتهم مسؤولية مشتركة ، وهم يستحقون الحصول
            على تجربة رعاية صحية متكاملة وفريدة من نوعها لا تقل عن الآخرين. لذلك
            نفتخر بأن تكتشف معنا برنامجنا الخاص بهم
          </p>
          <button className="btn-close" onclick="hide_pup_3()">
            Close
          </button>
        </div>
        <div className="card" id="pup_4">
          <button type="button" className="close" onclick="hide_pup_4()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-04.WebP"
            alt=""
          />
          <h2>Eshfaa Home care</h2>
          <p>
            ترتيب وتنسيق خدمات الرعاية المنزلية ليس بالأمر السهل على الإطلاق!
            إذا كان لديك مريض يحتاج إلى خدمات رعاية منزلية مختلفة ، فسيتعين عليك
            الاتصال بكيانات مختلفة لترتيب كل من هذه الخدمات وبعد بذل جهود كبيرة
            ومشاحنات ، لن تتمكن من ضمان الجودة! <br />
            نحن فخورون بالإعلان عن برنامج إشفاء للخدمات المنزلية لخدمات الرعاية
            الصحية المنزلية الرقمية المتكاملة بأعلى جودة وتكلفة معقولة وراحة
            البال ، حيث يمكنك طلب كل ما تحتاجه من خدمات الرعاية المنزلية المتاحة
            والعثور عليها من مكان واحد مع فريق واحد من مديري الحالات المحترفين
            ومنسقي الرعاية. <br />
            الآن مع برنامج " إشفاء للرعاية المنزلية ، يمكنك تصميم برنامج الرعاية
            المنزلية المخصص لك 1. الأطباء في المنزل: "المقيمون ، المتخصصون ،
            الاستشاريون" في تخصصات مختلفة. <br />
            2. العلاج الطبيعي وإعادة التأهيل في المنزل: <br />
            لجميع تخصصات العلاج الطبيعي وشفاء الإصابات الرياضية مع أفضل
            المناورات اليدوية والأجهزة المحمولة المتوفرة ، والتي يتم إجراؤها من
            قبل أخصائيي العلاج الطبيعي المسجلين المدربين تدريباً جيداً. <br />
            3. خدمات التمريض في المنزل 4. خدمات التحاليل في المنزل. <br />
            5. الأشعة والتصوير بالمنزل: <br />
            بما في ذلك الأشعة السينية المحمولة ، والموجات فوق الصوتية ، والدوبلر
            ، والدوبلكس ، تحت إشراف استشاريي واساتذة الأشعة في القاهرة
            والإسكندرية ، و رسم القلب و الإيكو في المنزل ، يتم تنفيذ الإيكو من
            قبل متخصصين واستشاريين في أمراض القلب ذوي الخبرة فقط. <br />
            6. تأجير الأجهزة المحمولة لإنشاء وحدة رعاية متعددة في المنزل. <br />
            7. غسيل الكلى في المنزل: <br />
            خدمة رعاية منزلية متطورة فريدة من نوعها ، يقوم بها فريق محترف من ذوي
            الخبرة لغسيل الكلى في المنزل ، مع أجهزة غسيل الكلى المحمولة المتقدمة
            ، تحت إشراف استشاريي أمراض الكلى والمسالك البولية. <br />
            "هذه الخدمة متوفرة الآن في الإسكندرية والساحل الشمالي ، وستتوفر
            قريبًا في القاهرة". <br />
            8. سيارات الإسعاف: <br />
            لنقل الحالات من المنزل الى المستشفيات وبالعكس. يتم الإشراف على جميع
            خدمات الرعاية المنزلية من قبل كل من: <br />
            1. فريق الأطباء لدينا في دليل إشفاء الطبي والمدير الطبي ، مع نظام
            إبلاغ يومي للحالات طويلة الأجل. <br />
            2. لدينا فريق من المتخصصين في الجودة ومديري الحالات تحت إشراف مدير
            الجودة لأفضل مراقبة الجودة وضمان الجودة. <br />
            خدمات الرعاية المنزلية لدينا ليست مخصصة لـ B2C فقط ، ولكن أيضًا
            للشركات والمؤسسات والمستشفيات ومقدمي الرعاية الصحية الآخرين ، نحن
            على استعداد لنكون ذراعك في مجال الرعاية المنزلية الموثوق به ، مع
            جودة موثوقة لموظفيك وعملائك.
          </p>
          <button className="btn-close" onclick="hide_pup_4()">
            Close
          </button>
        </div>
        <div className="card" id="pup_5">
          <button type="button" className="close" onclick="hide_pup_5()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-05.WebP"
            alt=""
          />
          <h2>Eshfaa Tele-medicine</h2>
          <p>
            التطبيب عن بعد ليس مكالمة هاتفية أو مجرد استشارة عبر الإنترنت!
            التطبيب عن بعد هو برنامج كامل بطرق مختلفة ، يصبح ضروريًا وإلزاميًا
            ومطلوبًا ومفضلًا في الحالات الخفيفة أو متابعة الأمراض المزمنة للعديد
            من الأشخاص ،خاصة بعد جائحة COVID19 ، الذي غيّر سلوك المستهلك لدى
            معظمنا ، أصبح الآن مقبولًا أكثر على أنه خطوة حيوية ضرورية حتى يصل
            المريض إلى الطبيب أو العكس. اكتشف برنامج "إشفاء للتطبيب عن بعد"
            واختر ما يناسبك وعملك مما يلي: <br />
            1. للأفراد: <br />
            يمكنك طلب استشارة عبر الإنترنت مع أحد أطبائنا في تخصصات مختلفة ،
            سواء كان مقيمًا أو متخصصًا أو استشاريًا ويمكنك اختيار طبيبك المفضل
            مع أفضل التقييمات ويمكنك اختيار الإتصال به إما مكالمة ڤيديو أو
            مكالمة هاتفية أو قم بالدردشة ، إما من خلال هاتفك أو جهازك اللوحي أو
            الكمبيوتر المحمول أو باستخدام تطبيق ملائم. <br />
            2. للشركات: <br />
            يمكنك الاستمتاع بباقات جذابة بأسعار تنافسية وخصومات كبيرة على
            الباقات الأعلى ، متوفرة لجميع موظفيك ، بجودة عالية وخفض التكلفة.{" "}
            <br />
            3. للعاملين في الموقع في المصانع والآبار والمناجم في المناطق
            النائية: <br />
            دعم العيادات في الموقع بأجهزة التطبيب عن بعد ، والتي تمكن الأطباء
            والممرضات في الموقع من الاتصال بمستشارين آخرين في مستشفيات الإحالة
            للحصول على رأي ثانٍ والمتابعة حتى الوصول إليهم ، إما عن طريق سيارات
            الإسعاف الرقمية أو الطائرات. <br />
            4. علم الأشعة عن بعد للمستشفيات ومراكز الأشعة: <br />
            دعم المستشفيات ومراكز الأشعة في نظام الإبلاغ عن حالاتهم من قبل فريق
            من استشاريي الأشعة ذوي الخبرة في هذا المجال. 5. التطبيب عن بعد في
            المنزل: <br />
            استخدام أجهزة التطبيب عن بعد في خدمات الرعاية المنزلية والزيارات
            لربط الممرضين والممرضات بالأطباء والمقيمين والمتخصصين والاستشاريين
            من أجل مراقبة أفضل للمرضى. <br />
            6. التطبيب عن بعد مع خبراء أجانب: <br />
            يمكنك الحصول على استشارات الرأي الثاني عبر الإنترنت مع خبراء أجانب
            في تخصصات طبية مختلفة من دول مختلفة مثل المملكة المتحدة وألمانيا
            والولايات المتحدة الأمريكية ، من خلال شبكة قوية من الخبراء الأجانب
            مع شركائنا. <br />
            7. التطبيب عن بعد لوحدات العناية المركزة: <br />
            إنشاء أنظمة وأجهزة التطبيب عن بعد لوحدات العناية المركزة ، ووحدات
            السكتة الدماغية ، والمتابعة والتشاور في الوقت الفعلي عبر الإنترنت مع
            فريق خبراء العناية المركزة لدينا في مصر والمملكة العربية السعودية
            وأوروبا والولايات المتحدة الأمريكية. <br />
            8. التطبيب عن بعد للمستشفيات: <br />
            إنشاء وحدات الأقمار الصناعية للمستشفيات العملاقة في المناطق النائية
            أو في حملات محددة لربط الأطباء وأخصائيي التمريض في هذه الوحدات
            الفضائية بالاستشاريين في المستشفيات الرئيسية باستخدام أجهزة التطبيب
            عن بعد. <br />
            9. التطبيب عن بعد لخدمات الإسعاف: <br />
            تمكين المسعفين من توصيل الأطباء أثناء إنقاذ المرضى باستخدام نظارات
            AR / VR التي تتيح نقل البيانات الحيوية في الوقت الفعلي لتمكين
            الأطباء من اتخاذ قرارات سريعة لإنقاذ الأرواح ، بالإضافة إلى تجهيز
            سيارات الإسعاف والطائرات بأجهزة التطبيب عن بعد لمراقبة المرضى
            بالداخل. طوال طريقهم إلى مستشفيات الطوارئ.
          </p>
          <button className="btn-close" onclick="hide_pup_5()">
            Close
          </button>
        </div>
        <div className="card" id="pup_6">
          <button type="button" className="close" onclick="hide_pup_6()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-06.WebP"
            alt=""
          />
          <h2>Eshfaa Family</h2>
          <p>
            هل تبحث عن خطة تأمين رعاية صحية مخصصة لعائلتك؟ هل تحب تصميم برنامج
            تأمين لأسرتك وفقًا لاحتياجاتك وميزانيتك المتوفرة؟ هل ترغب في الحصول
            على طبيب أسرة محدد للاستشارات الخاصة بأسرتك ، ومعرفة السجلات الطبية
            الإلكترونية (EMR) لكل فرد من أفراد الأسرة <br />
            وفريق الدعم الطبي لإدارة الحالة وتنسيق الرعاية لجميع خدمات الرعاية
            الصحية التي تحتاجها أسرتك مع خيارات وإرشادات متنوعة وأفضل العروض
            وأعلى الخصومات؟ أو حتى تغطية تأمينية كاملة؟ <br />
            اكتشف برنامج "إشفاء للعائلة" لتصميم برنامج ضمان خدمات الرعاية الصحية
            أو خطط التأمين المصممة خصيصًا ، يمكنك اختيار ما يناسبك لعائلتك من
            الخيارات التالية: <br />
            1. وجود مجموعة دعم طبي مخصصة لإدارة حالة عائلتك وتنسيق الرعاية وطلب
            "خدمات طبية مخفضة عند الطلب" تصل إلى 60٪ خصومات ، <br />
            بدون أي اشتراكات شهرية أو سنوية ، بدون شراء بطاقات ، ادفع فقط مقابل
            الخدمة التي تحتاجها مع خصومات واستمتع بـ "الرعاية القائمة على
            القيمة" <br />
            2. شراء بطاقات الخصم لعائلتك ، والتمتع بخصومات تصل إلى 70٪ ، اذهب
            بنفسك إلى المستشفيات ومقدمي الرعاية الصحية من شبكة قوية واسعة
            الانتشار. <br />
            3. اشترك في خطط تأمين عائلي محددة ، مع أحد شركائنا من شركات تأمين
            مختلفة ، واستمتع بتغطية تأمينية تتراوح من 80٪ إلى 100٪ ، وفقًا
            لميزانيتك واختيارك لما هو أكثر ملاءمة لك ولعائلتك ، واستمتع بالدعم و
            تقديم المشورة من مستشاري التأمين لدينا. <br />
          </p>
          <button className="btn-close" onclick="hide_pup_6()">
            Close
          </button>
        </div>
        <div className="card" id="pup_7">
          <button type="button" className="close" onclick="hide_pup_7()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-07.WebP"
            alt=""
          />
          <h2>Eshfaa Geriatric</h2>
          <p>
            قد كرّس لنا آباؤنا حياتهم وقدموا لنا رعاية عظيمة عندما كنا صغارًا ،
            وحان دورنا لنقدم لهم أفضل رعاية يستحقونها، لهذا، أنشأنا برنامج
            "إشفاء لكبار السن" لإدارة خدمات الرعاية الصحية المتكاملة لكبار السن،
            مع أفضل إدارة للحالات ولتجربة المرضى لجعل آبائنا وأمهاتنا وأجدادنا
            وجداتنا يتمتعون بأفضل ما لدينا. <br />
            حول "الرعاية المرتكزة عليهم والتعاطف مع مشاعرهم واحتياجاتهم ،
            ومراعاة حساسياتهم لقبول الرعاية من الآخرين" يدار هذا البرنامج من قبل
            موظفين ذوي خبرة عالية من المتخصصين والإستشاريين في "طب المسنين"، وهم
            نادرون جداً و محترفون للغاية في التعامل مع حالات كبار السن الطبية{" "}
            <br />
            مع تخصصات أخرى محددة مثل طب الأعصاب والطب النفسي والمسالك البولية
            وطب العيون والأنف والأذن والحنجرة والطب الباطني وأمراض القلب وغيرها
            من التخصصات ذات الصلة بالمسنين. <br />
            نحن ندير تنسيق الرعاية بين أطباء المسنين وأخصائيي العلاج الطبيعي
            والممرضات لتقديم رعاية متكاملة ومتوافقة طويلة الأجل مع جميع التخصصات
            المطلوبة سواء في طب المسنين أو العلاج الطبيعي أو التمريض ، سواء في
            خدمات الرعاية المنزلية أو في المراكز أو المستشفيات <br />
            بالإضافة إلى ذلك ، نقدم خدمات تشخيصية وعلاجية أخرى قد يحتاجها مرضانا
            الكبار ، مثل خدمات التحاليل أو الأشعة سواء في المنزل أو في المعامل
            أو المراكز ، مع إدارة الأدوية من قبل الصيادلة لدينا و توصيل الأدوية
            في المنزل مع خصومات من صيدلياتنا ، <br />
            حتى إذا كانت حالاتهم تتطلب عملية جراحية أو دخول المستشفى لوحدات
            العناية المركزة أو احتاجوا إلى سيارات إسعاف للإنتقال من المنزل إلى
            المستشفى أو العكس، <br />
            لا تقلق ، سنقوم بإدارة كل شيء من ذلك وتنسيق ما تحتاجه ، فقط تمتع
            براحة البال والتوجيه المهني وتلقي التقارير عن كل خطوة واجعل والديك
            يستمتعان بأفضل إدارة لتجربة المريض. <br />
            الإشتراك في برنامج "إشفاء لكبار السن" مجاني! <br />
            بدون أي رسوم اشتراك شهرية أو سنوية، دون الحاجة إلى أي موافقات مسبقة،
            دون أي حد أقصى للسن أو حالة صحية، ادفع فقط مقابل الخدمة المطلوبة
            حقًا ، مع الخصومات والاستمتاع بـ "الرعاية القائمة على القيمة".
          </p>
          <button className="btn-close" onclick="hide_pup_7()">
            Close
          </button>
        </div>
        <div className="card" id="pup_8">
          <button type="button" className="close" onclick="hide_pup_8()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-08.WebP"
            alt=""
          />
          <h2>Eshfaa C.D.M</h2>
          <p>
            الرعاية الصحية المتكاملة مع التعليم والدعم هم أساس برنامجنا لرعاية
            المصابين بأمراض مزمنة، والذي تم تصميمه خصيصًا لرعاية أمهاتنا وآباءنا
            المسنين ومساعدتهم على العيش بصحة أفضل مع ظروفهم الصحية المزمنة ،
            يقوم الفريق الطبي بدعمهم ومساعدتهم على إبطاء حالتهم وتوجيههم إلى نمط
            حياة صحي مع توفير جميع وسائل رعاية صحتهم. تعرف على برنامجنا الآن ..
            واستمتع بالتجربة مع الخدمات التالية: <br />
            1. الأطباء في المنزل: "المقيمون والمتخصصون والاستشاريون" في تخصصات
            مختلفة. <br />
            2. العلاج الطبيعي وإعادة التأهيل في المنزل: لجميع تخصصات العلاج
            الطبيعي ورياضات الشفاء " الإصابات باستخدام أفضل المناورات اليدوية
            والأجهزة المحمولة المتوفرة ، والتي يتم إجراؤها من قبل أخصائيي العلاج
            الطبيعي المسجلين والمدربين تدريباً جيداً فقط. <br />
            3. التمريض في المنزل: مع طاقم مؤهل من "أخصائيي التمريض والفنيين
            ومساعدات التمريض" <br />
            4. خدمات المعامل في المنزل. <br />
            5. الأشعة والتصوير في المنزل: بما في ذلك الأشعة السينية المحمولة
            والموجات فوق الصوتية والدوبلر والدوبلكس ، تحت
            <br />
            إشراف استشاريي وأساتذة الأشعة في القاهرة والإسكندرية ، وورسم القلب و
            الإيكو في المنزل ، يتم تنفيذ الإيكو من قبل متخصصين واستشاريين
            متخصصين في أمراض القلب فقط. <br />
            6. تأجير الأجهزة المحمولة لإنشاء وحدة رعاية متعددة في المنزل. <br />
            7. غسيل الكلى في المنزل: خدمة رعاية منزلية متطورة فريدة من نوعها ،
            يتم إجراؤها من قبل فريق متخصص من ذوي الخبرة من غسيل الكلى في المنزل
            ، مع أجهزة غسيل الكلى المحمولة المتقدمة ، تحت إشراف استشاريي أمراض
            الكلى والمسالك البولية. "هذه الخدمة متوفرة الآن في الإسكندرية
            والساحل الشمالي ، وستتوفر قريبًا في القاهرة". <br />
            9. سيارات الإسعاف: لنقل الحالات من المنزل إلى المستشفيات والعكس. يتم
            الإشراف على جميع خدمات الرعاية المنزلية من قبل كل من: <br />
            1. فريق الأطباء لدينا في دليل إشفاء الطبي والمدير الطبي ، مع نظام
            إبلاغ يومي للحالات طويلة الأجل. <br />
            2. لدينا فريق من المتخصصين في الجودة ومديري الحالات تحت إشراف مدير
            الجودة لأفضل مراقبة الجودة وضمان الجودة. <br />
            استشاريين أمراض الكلى. "هذه الخدمة متوفرة الآن في الإسكندرية والساحل
            الشمالي ، وستتوفر قريبًا في القاهرة".
          </p>
          <button className="btn-close" onclick="hide_pup_8()">
            Close
          </button>
        </div>
        <div className="card" id="pup_9">
          <button type="button" className="close" onclick="hide_pup_9()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-09.WebP"
            alt=""
          />
          <h2>Eshfaa Peri-natal</h2>
          <p>
            في تقرير لمنظمة الصحة العالمية لعام 2015 أوضحت المنظمة أن 830 امرأة
            تفقد حياتها اليومية بسبب مشاكل الحمل والولادة ، لذلك فهي فترة حاسمة
            ومصيرية في حياة كل امرأة وتستدعي عناية طبية خاصة و رعاية من أطباء
            وفريق طبي متخصص ومحترف وحريص ، في إشفاء لا داعي للقلق بعد الآن في
            إشفاء فريق طبي متخصص للرعاية الدورية وفريق خدمة عملاء متابع على مدار
            الساعة ... فقط من أجل سلامتك <br />
            <br />
            تعرفي الآن على Eshfaa peri_natal
          </p>
          <button className="btn-close" onclick="hide_pup_9()">
            Close
          </button>
        </div>
        <div className="card" id="pup_10">
          <button type="button" className="close" onclick="hide_pup_10()">
            ×
          </button>
          <img
            className="pup-img"
            src="./images/programs/programs-10.WebP"
            alt=""
          />
          <h2>Eshfaa Special</h2>
          <p>
            برنامج رعاية صحية مصمم خصيصًا للأشخاص ذوي الإعاقة ، لإدارة الحالات
            الطبية وتنسيق الرعاية للجميع ، مهما كانت إعاقته ، سواء كانت خلقية أو
            عرضية ، بدءًا من المراقبة والمتابعة من اللحظة الأولى التي تكون فيها
            الأم الحامل قد اكتشفت أن طفلها سيصاب بتشوه خلقي ، واضطراب وراثي ،
            وإعاقة عقلية أو جسدية ، ثم رعاية ما بعد الولادة لهذه الأم وطفلها ،
            وتنسيق جميع الخدمات الطبية التشخيصية والعلاجية ، والمتابعة المستمرة
            والمراقبة خلال رحلة هذا الابن الخاص خلال الطفولة والمراهقة ومراحل
            مختلفة من حياته ، قبل كل ذلك لا ننسى الدعم النفسي والروحي لهؤلاء
            الوالدين المميزين. <br />
            نحن نولي اهتمامًا كبيرًا للأشخاص الذين يعانون من إعاقات عرضية أو
            مرضية مكتسبة ، وإدارة حالاتهم الطبية ، وتنسيق جميع خدمات الرعاية
            الصحية التي يحتاجون إليها ، حتى في المنزل ، فنحن رفيقهم الطبي من
            خلال رحلتهم الطويلة في العلاج الطبيعي وإعادة التأهيل ، ونوفر لهم
            جميع الأجهزة والمعدات الطبية. يحتاجون إليها ، ودعمهم لاستعادة حياتهم
            والعودة لاستئناف عملهم وأنشطتهم ، مع راحة البال والاستمتاع بالرعاية
            التي تركز على الشخص.
          </p>
          <button className="btn-close" onclick="hide_pup_10()">
            Close
          </button>
        </div>
      </div>
      {/*=========== End Programs card.open SECTION ================*/}
      {/*=========== End Programs SECTION ================*/}
      {/*=========== BEGIN Service SECTION ================*/}
      <section id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="service-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>خدمات إشفاء</h2>
                  <div className="line" />
                </div>
                {/* Start Service Content */}
                <div className="service-content">
                  <div className="row">
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img src="images/icons/home.WebP" alt="homecare" />
                          </span>
                        </div>
                        <h3>
                          <a>خدمات الرعاية المنزلية المتكاملة</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/laporatory.WebP"
                              alt="laporatory"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>التحاليل الطبية بالمنزل والمعمل</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/radiology.WebP"
                              alt="radiology"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>الآشعات بالمنزل والمركز</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/physiotherapy.WebP"
                              alt="physiotherapy"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>خدمات العلاج الطبيعي وإعادة التأهيل</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              className="icon-mid"
                              src="images/icons/medication.WebP"
                              alt="medication"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>خدمات إدارة وتوصيل الأدوية</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/hospital.WebP"
                              alt="hospital"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>حجز العيادات والمستشفيات</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/tele-Consulting.WebP"
                              alt="tele-Consulting"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>خدمات التطبيب عن بعد</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/booking.WebP"
                              alt="ICUs, NICUs booking"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>
                            حجز العنايات المركزة والعنايات المركزة لحديثي
                            الولادة
                          </a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/surgical.WebP"
                              alt="surgical"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>تنسيق العمليات الجراحية</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                    {/* Start Single Service */}
                    <div className="col-lg-4 col-md-4">
                      <div className="single-service">
                        <div className="service-icon">
                          <span className="service-icon-effect">
                            <img
                              src="images/icons/on-site.WebP"
                              alt="on-site"
                            />
                          </span>
                        </div>
                        <h3>
                          <a>خدمات وإسعافات المواقع</a>
                        </h3>
                      </div>
                    </div>
                    {/*End Single Service */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End Service SECTION ================*/}
      {/*=========== BEGAIN Counter SECTION ================*/}
      <section id="counterSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="counter-area">
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">4500</div>
                    <div className="counter-label">الشبكات الطبية</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">7000</div>
                    <div className="counter-label">مقدمي الخدمات</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">10000</div>
                    <div className="counter-label">العملاء</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="counter-box">
                    <div className="counter-no counter">1000</div>
                    <div className="counter-label">تجارب المرضى</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End Counter SECTION ================*/}
      {/*=========== BEGAIN partners of success SECTION ================*/}
      <section id="success" className="meetDoctors success">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="meetDoctors-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>شركاء النجاح</h2>
                  <div className="line" />
                  <p className="p-success">
                    للوصول لأعلى درجات الراحة والأمان وتحقيق رؤية إشفاء.. في
                    توفير الرعاية الصحية المتكاملة من الألف للياء تعاون مع كبرى
                    الكيانات الطبية في كل المحافظات <br />
                    تعرّف على شركاء النجاح
                  </p>
                </div>
                <div className="doctors-area">
                  <ul className="doctors-nav">
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-01.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-02.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-04.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-05.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-06.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-08.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-09.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-10.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-11.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-12.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-13.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-14.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-15.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-16.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-17.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-18.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-19.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/gallery-20.WebP"
                              alt="partners-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End partners of success SECTION ================*/}
      {/*=========== BEGAIN partners of success SECTION ================*/}
      <section id="meetDoctors">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="meetDoctors-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>تعرفوا علي جمعيات ومؤسسات إشفاء</h2>
                  <div className="line" />
                  <p className="p-success">
                    إيماناً منا بالمسئولية المجتمعية للشركة تتشرّف إشفاء بتقديم
                    خدماته لهذه الكيانات
                  </p>
                </div>
                <div className="doctors-area">
                  <ul className="doctors-nav">
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-03.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-02.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-01.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-04.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-05.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="single-doctor">
                        <a className="tdoctor">
                          <figure>
                            <img
                              className="success"
                              src="images/gallery/associations-06.WebP"
                              alt="associations-img"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End partners of success SECTION ================*/}
      {/*=========== BEGAIN Testimonial SECTION ================*/}
      <section id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="testimonial-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>آراء عملائنا</h2>
                  <div className="line" />
                </div>
                <div className="testimonial-area">
                  <ul className="testimonial-nav">
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-01.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-02.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-03.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-04.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-05.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-06.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-testimonial">
                        <div className="testimonial-img">
                          <img
                            src="images/testimonials/testimonials-07.WebP"
                            alt="testimonials-img"
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End Testimonial SECTION ================*/}
      {/*=========== BEGAIN Home Blog SECTION ================*/}
      <section id="homeBLog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="homBlog-area">
                {/* Start Service Title */}
                <div className="section-heading">
                  <h2>مقالات اشفاء</h2>
                  <div className="line" />
                </div>
                {/* Start Home Blog Content */}
                <div className="homeBlog-content">
                  <div className="row">
                    {/* Start Single Blog */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="single-Blog">
                        <div className="single-blog-right">
                          <div className="blog-img">
                            <figure className="blog-figure">
                              <a href="/HeartAr">
                                <img
                                  src="images/gallery/heart/heart-06.WebP"
                                  alt="img"
                                />
                              </a>
                              <span className="image-effect" />
                            </figure>
                          </div>
                          <div className="blog-author">
                            <ul>
                              <li>
                                By <a>Eshfaa</a>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-content">
                            <h2>فشل عضلة القلب </h2>
                            <p>
                              فشل عضلة القلب لا يعني أن القلب لم يعد يعمل بعد
                              ولكنه يحتاج لبعض المساعدة ليعمل بشكل أفضل، عادة ما
                              يكون مرضًا مزمنًا لا تتحسن أعراضه ولكن يمكن
                              السيطرة عليها لسنوات عديدة خاصة إذا تم إكتشافه في
                              وقت مبكر وتم إتباع الخطة العلاجية المناسبة...
                            </p>
                            <div className="readmore_area">
                              <a
                                href="/HeartAr"
                                data-hover="قراءة المزيد"
                              >
                                <span>قراءة المزيد</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Start Single Blog */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="single-Blog">
                        <div className="single-blog-right">
                          <div className="blog-img">
                            <figure className="blog-figure">
                              <a href="/LungAr">
                                <img
                                  src="images/gallery/Lung-cancer/lung-10.WebP"
                                  alt="img"
                                />
                              </a>
                              <span className="image-effect" />
                            </figure>
                          </div>
                          <div className="blog-author">
                            <ul>
                              <li>
                                By <a>Eshfaa</a>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-content">
                            <h2>سرطان الرئة</h2>
                            <p>
                              هل تعرف ما هو سرطان الرئة؟ وما ومدي خطورته؟ كيف
                              يمكن أن تصاب به؟ ما هى أعراضه؟ كم فرصة الشفاء منه؟
                              كل ذلك وأكثرعن سرطان الرئة سنستعرضه بالتفصيل في
                              هذا المقال، فهيا أبدأ معنا ولا تتردد.
                            </p>
                            <div className="readmore_area">
                              <a
                                href="/LungAr"
                                data-hover="قراءة المزيد"
                              >
                                <span>قراءة المزيد</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Start Single Blog */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="single-Blog">
                        <div className="single-blog-right">
                          <div className="blog-img">
                            <figure className="blog-figure">
                              <a href="/AntibioticAr">
                                <img
                                  src="images/gallery/antibiotic/antibiotic-01.WebP"
                                  alt="img"
                                />
                              </a>
                              <span className="image-effect" />
                            </figure>
                          </div>
                          <div className="blog-author">
                            <ul>
                              <li>
                                By <a>Eshfaa</a>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-content">
                            <h2>مقاومة المضادات الحيوية</h2>
                            <p>
                              تستخدم المضادات الحيوية في علاج الأمراض الناتجة عن
                              البكتيريا حيث أنها تمنع نمو الميكروبات أو تبطئ من
                              معدل تكاثرها. وتعتبر المضادات الحيوية غير فعالة في
                              حالة الأمراض التي تنتج من عدوى فيروسية مثل
                              الانفلونزا ونزلات البرد.
                            </p>
                            <div className="readmore_area">
                              <a
                                href="/AntibioticAr"
                                data-hover="قراءة المزيد"
                              >
                                <span>قراءة المزيد</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========== End Home Blog SECTION ================*/}
      {/*=========== Start Footer SECTION ================*/}
      <footer id="footer">
        {/* Start Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row footer">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="single-footer-widget">
                  <div className="section-heading">
                    <h2>تواصل معنا</h2>
                    <div className="line" />
                  </div>
                  <address className="contact-info">
                    <p>
                      <span className="fa fa-home" /> 3 شارع مكرم عبيد، مدينة
                      نصر، القاهرة ،مصر
                    </p>
                    <p>
                      <a href="tel:+201200777738">
                        <span className="fa fa-phone" /> 01200777738
                      </a>
                    </p>
                    <p>
                      <a href="https://wa.me/+201200777738">
                        <i className="fa-brands fa-whatsapp" /> 01200777738
                      </a>
                    </p>
                    <p>
                      <a href="http://www.linkedin.com/company/eshfaa">
                        <i className="fa-brands fa-linkedin" />
                        www.linkedin.com/eshfaa
                      </a>
                    </p>
                    <p>
                      <a href="http://www.facebook.com/eshfaa1">
                        <i className="fa-brands fa-facebook" />
                        www.facebook.com/eshfaa1
                      </a>
                    </p>
                    <p>
                      <a href="http://www.Instagram.com/eshfaa1">
                        <i className="fa-brands fa-instagram" />
                        www.Instagram.com/eshfaa1
                      </a>
                    </p>
                    <p>
                      <a href="https://m.youtube.com/channel/UCVeABOOrwFsw3gaHesQ8m9g/videos">
                        <i className="fa-brands fa-youtube" />{" "}
                        youtube.com/channel
                      </a>
                    </p>
                    <p>
                      <a href="http://www.twitter.com/eshfaa_app">
                        <i className="fa-brands fa-twitter" />
                        www.twitter.com/eshfaa
                      </a>
                    </p>
                    <p>
                      <a href="mailto:Info@eshfaa.com">
                        <i className="fa-solid fa-envelope" /> Info@eshfaa.com
                      </a>
                    </p>
                  </address>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="single-footer-widget">
                  <div className="section-heading">
                    <h2>خدماتنا</h2>
                    <div className="line" />
                  </div>
                  <ul className="footer-service">
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات الرعاية المنزلية المتكاملة
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        التحاليل الطبية بالمنزل والمعمل
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        الآشعات بالمنزل والمركز
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات العلاج الطبيعي وإعادة التأهيل{" "}
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات إدارة وتوصيل الأدوية
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        حجز العيادات والمستشفيات
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات التطبيب عن بعد
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        حجز العنايات المركزة والعنايات المركزة لحديثي الولادة
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a style={{ fontSize: "13px" }} href="#service">
                        <span className="fa fa-check" />
                        تنسيق العمليات الجراحية
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <span className="fa fa-check" />
                        خدمات وإسعافات المواقع
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="single-footer-widget">
                  <div className="section-heading">
                    <h2>برامجنا</h2>
                    <div className="line" />
                  </div>
                  <ul className="footer-service">
                    <li>
                      <a onclick="show_pup_1()">
                        <span className="fa fa-check" />
                        Eshfaa plus <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_2()">
                        <span className="fa fa-check" />
                        Eshfaa on-site
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_3()">
                        <span className="fa fa-check" />
                        Eshfaa charity
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_4()">
                        <span className="fa fa-check" />
                        Eshfaa Homecare
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_5()">
                        <span className="fa fa-check" />
                        Eshfaa Tele medicin
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_6()">
                        <span className="fa fa-check" />
                        Eshfaa Family
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_7()">
                        <span className="fa fa-check" />
                        Eshfaa geriatric
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_8()">
                        <span className="fa fa-check" />
                        Eshfaa CDM <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_9()">
                        <span className="fa fa-check" />
                        Eshfaa peri-natal{" "}
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a onclick="show_pup_10()">
                        <span className="fa fa-check" />
                        Eshfaa special
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="footer-copyright col-md-12">
                <p>
                  © Copyright 2022 &amp; Developed By{" "}
                  <a
                    rel="nofollow"
                    target="_blank"
                    href="https://yehia-gamal.github.io/CodeTechStation/"
                  >
                    CodeTechStation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*=========== End Footer SECTION ================*/}
      {/* jQuery Library  */}
      {/* Bootstrap default js */}
      {/* slick slider */}
      {/* counter */}
      {/* Photo Swipe Gallery Slider */}
      {/* Custom JS */}
    </>
  );
};

export default HomeAr;
