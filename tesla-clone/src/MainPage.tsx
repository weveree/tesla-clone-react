import Banner from "./Banner";
import './main.scss'


import modelY from './assets/tY.png'
import models from './assets/models.png'
import model3 from './assets/model3.png'
import modelx from './assets/modelx.png'

function MainPage(){

    

    return(
        <>
        <title>Tesla</title>

         <div>
        <div className="hero">
        <div className='Banners'>
            <Banner img={modelY} carName='Model Y' price='43 000'></Banner>
            <Banner img={model3} carName='Model 3' price='39 990'></Banner>
            <Banner img={models} carName='Model S' price='92 990'></Banner>
            <Banner img={modelx} carName='Model X' price='99 990'></Banner>

        </div>
        
    </div>
    </div>
   
        
        </>
    )

}

export default MainPage