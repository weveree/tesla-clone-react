function Banner({carName,price,img}:{carName:string,price:string,img:string}){
    const myStyle = {
        backgroundImage: `url(${img})`
      }
    return(
        <>
        <div className="imagePres" style={myStyle}>
            <div className='hero-text'>
            <h1>{carName}</h1>
            <span><b>À partir de {price} €</b></span>
            </div>
            <div className='btn-opt'>
            <button className='white'>Commander</button>
            <button className='grey'>Essais</button>
            </div>
            <div>
            <br></br>
            <a className='underline thin t2'>En savoir plus sur Tesla for Business</a>
            </div>
        </div>
      </>
    )
}
export default Banner;