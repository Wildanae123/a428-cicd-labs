function App() {
  const getComputerInfo = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    const ipAddress = data.ip;
    const computerName = window.location.hostname;
    const date = new Date();
    const formattedDate = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  };

  getComputerInfo().then(({ ipAddress, computerName, accessDate }) => {
    const computerNameElement = document.getElementById("computer-name");
    const ipAddressElement = document.getElementById("ip-address");
    const accessDateElement = document.getElementById("access-date");
    computerNameElement.innerHTML += ` ${computerName}`;
    ipAddressElement.innerHTML += ` ${ipAddress}`;
    accessDateElement.innerHTML += ` ${accessDate}`;
  });

  return (
    <div>
      {/* <!--====== Preloader Area Start ======--> */}
      <div id="loader">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
      {/* <!--====== Preloader Area End ======--> */}

      <div class="all-area">
        {/* <!-- ***** Header Start ***** --> */}
        <header class="section header-area">
          <div id="header" class="main-header-area nav-white">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-md navbar-light">
                {/* <!-- Logo --> */}
                <a class="navbar-brand" href="#">
                  <img
                    class="logo"
                    src="assets/img/logo/logo-white.png"
                    alt=""
                  />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menu"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                {/* <!-- Menu --> */}
                <div class="collapse navbar-collapse" id="menu">
                  {/* <!-- Header Items --> */}
                  <ul class="navbar-nav header-items ml-auto">
                    <li class="nav-item active">
                      <a class="nav-link scroll" href="#">
                        Home
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* <!-- ***** Header End ***** --> */}

        {/* <!-- ***** Welcome Area Start ***** --> */}
        <section
          id="home"
          class="section welcome-area d-flex align-items-center h-100vh pt-0"
        >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              {/* <!-- Welcome Intro Start --> */}
              <div class="col-12 col-md-10 col-lg-8">
                <div class="welcome-intro text-center mt-0">
                  <h2 class="cd-headline clip fw-3 mt-2 mt-sm-3">
                    <span class="cd-words-wrapper">
                      <b class="text-white is-visible">Hello</b>
                      <b class="text-white">Bonjour</b>
                      <b class="text-white">你好</b>
                      <b class="text-white">こんにちは</b>
                      <b class="text-white">Привет</b>
                    </span>
                    <span class="text-white" id="computer-name"></span>
                  </h2>
                  <h1 class="text-white">Welcome</h1>
                  <p class="text-white my-3">Your IP : </p>
                  <p class="text-white my-3" id="ip-address"></p>
                  <p class="text-white my-3">Your Access Date : </p>
                  <p class="text-white my-3" id="access-date"></p>
                  <div class="button-group">
                    <a href="#" class="btn btn-bordered-white">
                      <span>Sign In</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ***** Welcome Area End ***** --> */}
      </div>
    </div>
  );
}

export default App;
