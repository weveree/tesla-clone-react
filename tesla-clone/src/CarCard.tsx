interface a {
    name:string,imgs:string
}
function CarCard({name,imgs}:a){
    return(
        <div>
            <img src={imgs} alt="" />
            <span>{name}</span>
            <div>
                <a className="underline grey-c">Decouvrir</a>
                <a className="underline grey-c">Commander</a>
            </div>
        </div>
    );
}

export default CarCard;