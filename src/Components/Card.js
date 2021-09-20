const Card = ({id, name, email}) =>{
    return(
        <div className='bg-green dib pa3 ma2 br3 shadow-5 grow'>
            <img alt='robot' src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;