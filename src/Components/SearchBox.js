const SearchBox = ({searchChange}) =>{
    return(
        <div className='pa3'>
            <input 
                className='bg-light-blue b--green pa3 ba'
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;