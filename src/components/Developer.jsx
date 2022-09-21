const CardMaker = ({name, age, country}) =>{
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <span>{country}</span>
        </div>
    )
}
export default CardMaker