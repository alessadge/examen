import React from 'react';


function App() {
  return (
    
    <div className="App">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        
  <a class="navbar-brand" href="#"><strong>Foodies</strong></a>

 
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="https://www.instagram.com/unguanacoentegus/" target="_blank">Un Guanaco en Tegus</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://www.instagram.com/quecomeellempira/" target="_blank">¿Que come Lempira?</a>
    </li>
    <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/distritohotelerohn/" target="_blank">Distrito Hotelero</a>
    </li>


    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Tipos de comida
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="https://www.instagram.com/p/BtPiumFFkdw/" target="_blank">Carne Asada</a>
        <a class="dropdown-item" href="https://www.instagram.com/p/BoZuluLnMKg/"target="_blank">Pastas</a>
        <a class="dropdown-item" href="https://www.instagram.com/p/B0gPZpznzTN/" target="_blank">Hamburguesas</a>
        
      </div>
      
    </li>
    
  </ul>
  
</nav>
<div class="jumbotron text-center">
  <h1>¿Alguna idea de donde podremos comer?</h1>
  <p><strong>¡Averigua a continuación!</strong></p> 
</div>

<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3> 
      <p>Lorem ipsum dolor..</p>
    </div>
  </div>
</div>
    </div>
    
  );
  
}

export default App;
