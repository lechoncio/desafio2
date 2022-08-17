
import './App.css';

function App() {
  return (    
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html"><img class="logo" src="../images/logo.png" alt="logo"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav1" href="./armados.html"><b>SkateBoards Armados</b></a>
              </li>
              <li class="nav-item">
                <a class="nav1" href="./tablas.html"><b>Tablas</b></a>
              </li>
              <li class="nav-item">
                <a class="nav1" aria-current="page" href="./long.html"><b>LongBoards</b></a>
              </li>
              <li class="nav-item">
                <a class="nav1" aria-current="page" href="./accesorios.html"><b>Accesorios</b></a>
              </li>
            </ul>
            
          </div>
          <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav1" href="./armados.html"><b>Login</b></a>
              </li>
              <li class="nav-item">
                <a class="nav1" href="./tablas.html"><b>Registrarse</b></a>
              </li>
              </ul>
          
      </div>
    </nav>       
    </>
  );
}

export default App;
