import React from 'react'

function Home() {
  return (
    
    <div className='Nav'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">RP flowers</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Shopoccasions">Shop Occasions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Floraldecor">Floraldecor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Login">Login</a>
        </li>      
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Product">Product</a>
        </li>   
      </ul>
    </div>
    <div className='con fs-4 '>
    <i class="bi bi-cart4" style={{padding:"10px"}} ></i>
    <i class="bi bi-person-fill" style={{padding:"10px"}}></i>
    <i class="bi bi-search" style={{padding:"10px"}}></i>
    </div>
  </div>
</nav>
</div>
  )
}

export default Home