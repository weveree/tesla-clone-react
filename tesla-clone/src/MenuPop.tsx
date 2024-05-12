export const MenuPop = () =>{
    function hello(){
        console.log();
    }
    return(
        <div onLoad={()=>hello()} className='MenuPop'>
        </div>
    );
}
export default MenuPop