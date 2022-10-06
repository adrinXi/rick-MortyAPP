import React from 'react'

const FilterList = ({suggestedList, setSearchInput}) => {

    console.log(suggestedList)

    const handleClick = id => setSearchInput(id)

    return (
        <ul className='search__list'>
            {
                suggestedList?.map(location => (
                    <li 
                    className='search__list-option'
                    onClick={() => handleClick(location.id)} 
                    key={location.id}>{location.name}</li>
                ))
            }
        </ul>
    )
}

export default FilterList