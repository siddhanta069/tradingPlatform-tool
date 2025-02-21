const Hero = () => {
  return (
    <div className= "container p-5 mb-5">
      <div className="row justify-content-center">
        <img className="img-fluid mb-5" src="images/homeHero.png" alt="Hero Image"  />
        <h1 className="mt-5 d-flex justify-content-center">Invest in everything</h1>
        <p className="d-flex justify-content-center">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary fs-5 mb-5 px-4 ">Sign up for free</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
