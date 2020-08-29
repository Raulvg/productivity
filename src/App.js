import React from 'react';
import llogo from './img/iconlong.png';
import test from './img/img1.png';
//import img1 from './img/img1.png';
//import img2 from './img/img1.png';
//import img3 from './img/img1.png';
//import img4 from './img/img1.png';
//import img5 from './img/img1.png';
//import img6 from './img/img1.png';
//import img7 from './img/img1.png';
//import img8 from './img/img1.png';
import './css/App.css';
import './css/bootstrap.css';
import './style.css';
//import './css/dark.css';

function App() {
  return (

    <div id="wrapper stretched" class="clearfix">

      {/*<!-- Header
      ============================================= -->*/}
      <header id="header" class="full-header transparent-header" data-sticky-class="not-dark">
        <div id="header-wrap">
          <div class="container">
            <div class="header-row">

              {/*<!-- Logo
              ============================================= -->*/}
              <div id="logo">
                <a href="index.html" class="standard-logo"><img src={llogo} alt="Logo"/></a>
              </div>{/*<!-- #logo end -->*/}

              <div class="header-misc">

							{/*<!-- Top Search
							============================================= -->*/}
							<div class="btn-container">
								<a href="index.html" class="btn-a btn">PRUEBA GRATIS</a>
							</div>{/*<!-- #top-search end -->*/}
						</div>


              <div id="primary-menu-trigger">
                <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
              </div>

              {/*<!-- Primary Navigation
              ============================================= -->*/}
              <nav class="primary-menu">

                <ul class="menu-container">
                  <li class="menu-item">
                    <a class="menu-link" href="index.html"><div>Iniciar sesión</div></a>
                  </li>
                </ul>

              </nav>{/*<!-- #primary-menu end -->*/}

              <form class="top-search-form" action="search.html" method="get">
							  <input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter.." autocomplete="off"/>
						  </form>

            </div>
          </div>
        </div>
      </header>{/*<!-- #header end -->*/}

      {/*<!-- Content
      ============================================= -->*/}
      <section id="content">
        <div class="content-wrap-padding background-circuits">
          <div class="container ">
            <div class="row align-items-center ">

              <div class="col-lg-8">
                <div class="header-wrap-clone"></div>
                <div class="heading-block border-bottom-0">
                  <h1 class="font-keep-blue">CALEO PRODUCTIVITY</h1>
                </div>
                <p class="lead">CALEO PRODUCTIVITY es una herramienta que nos permite conocer la productividad de nuestros empleados, ver sus necesidades, puntos de oportunidad, entre otras; a través de una interfaz gráfica, amigable e intuitiva.</p>
                
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrap background-section">
          {/*<canvas ref="c"></canvas>
          <script src="hover.js"></script>
          <!-- first section -->*/}
          
          <a href="portfolio.html">
            <div class="div-body fade-div">
              <p class="title-p">CARACTERISTICAS</p>
            </div>
          </a>

          <div class="row clearfix align-items-stretch">
            <div class="col-lg-12 center col-padding">
              <figure class="snip1477">
              <img src={test} alt="example_01" />
                <div class="title">
                  <div>
                    <h4>NIVELES DE SEGURIDAD</h4>
                  </div>
                </div>
                <figcaption>
                  <p>Los usuarios monitoreados no tienen acceso a la plataforma, solo supervisores pueden ver la información a través de una autenticación.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="row clearfix align-items-stretch">
            <div class="col-lg-12 center col-padding">
              <figure class="snip1477">
                <img src={test} alt="example_01" />
                <div class="title">
                  <div>
                    <h4>MONITOREO DE ACTIVIDADES</h4>
                  </div>
                </div>
                <figcaption>
                  <p>CALEO PRODUCTIVITY arroja información detallada de las actividades de los agentes como el software utilizado y páginas visitadas.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="row clearfix align-items-stretch">
            <div class="col-lg-12 center col-padding">
              <figure class="snip1477">
                <img src={test} alt="example_01" />
                <div class="title">
                  <div>
                    <h4>ESTADÍSTICAS DE TIEMPOS</h4>
                  </div>
                </div>
                <figcaption>
                  <p>Muestra graficas e información del tiempo invertido en software, sitios web, herramientas, entre otros.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="row clearfix align-items-stretch">
            <div class="col-lg-12 center col-padding">
              <figure class="snip1477">
                <img src={test} alt="example_01" />
                <div class="title">
                  <div>
                    <h4>CONTROL DE HORARIO</h4>
                  </div>
                </div>
                <figcaption>
                  <p>Con CALEO PRODUCTIVITY podrá conocer los horarios más productivos, hora de inicio de actividades, fin de actividades, tiempo de ocio y más.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          {/*<!-- Beneficios section -->*/}

          <div class="header-wrap-clone"></div>
          <a href="portfolio.html">
            <div class="div-body">
              <p class="title-p">BENEFICIOS</p>
            </div>
          </a>

          <div class="row clearfix align-items-stretch">
            <div class="col-lg-12 center col-padding">
              <figure class="snip1477">
                <img src={test} alt="example_01" />
                <div class="title">
                  <div>
                    <h4>DETECCIÓN DE FRAUDES</h4>
                  </div>
                </div>
                <figcaption>
                  <p>- Detección de fuga de información y uso indebido de la misma.<br></br>- Detección de abuso de privilegios.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="row clearfix align-items-stretch">
            <div class="col-lg-12 center col-padding">
              <figure class="snip1477">
                <img src={test} alt="example_01" />
                <div class="title">
                  <div>
                    <h4>CONOCER PUNTOS DE OPORTUNIDAD</h4>
                  </div>
                </div>
                <figcaption>
                  <p>- Conocer si existen empleados insatisfechos.<br></br>- Mejora en la toma de decisiones.<br></br>- Detectar cargas de trabajo no equitativas entre empleados.<br></br>- Mitigar bulling entre el personal.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="row clearfix align-items-stretch">
            <div class="col-lg-12 center col-padding">
              <figure class="snip1477">
                <img src={test} alt="example_01" />
                <div class="title">
                  <div>
                    <h4>CONOCER EFECTIVIDAD DE LAS HERRAMIENTAS</h4>
                  </div>
                </div>
                <figcaption>
                  <p>- Averiguar si las herramientas instaladas en los equipos de los usuarios cumplen con las necesidades.<br></br>- Conocer que herramientas podrían mejorar la productividad de los empleados.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="row clearfix align-items-stretch">
            <div class="col-lg-12 center col-padding">
              <figure class="snip1477">
                <img src={test} alt="example_01" />
                <div class="title">
                  <div>
                    <h4>MEJORA DE TIEMPOS PRODUCTIVOS</h4>
                  </div>
                </div>
                <figcaption>
                  <p>- Conocer si los tiempos de inicio y fin de actividades de los empleados.<br></br>- Conocer los horarios más productivos.<br></br>- Tiempo invertido en ocio.<br></br>- Tiempos muertos.</p>
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
      </section>{/*<!-- #content end -->*/}
      
    </div>
  );
}

export default App;
