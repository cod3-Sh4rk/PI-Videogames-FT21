import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { originFilter, getGenres, setPage, genreFilter} from '../Redux/actions'
import "./filters.css"



function Filter() {
    //const [input, setInput] = React.useState("")

    
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state)

    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])
    

    const handleOnChangeSelect = (e)=>{
        e.preventDefault()
        console.log("lo que me llega de filtros", e.target.value)
        dispatch(genreFilter(e.target.value))
        dispatch(setPage(1))
    }

    const handleSelectO = (e)=>{
        e.preventDefault()
        dispatch(originFilter(e.target.value))
        
    }


    
    return (
        <React.Fragment>
        <div className= "filters">
            <p>generos</p>
            <select onChange={handleOnChangeSelect}>
                <option  selected value="all">all</option>
                {genres.map((g) => { return <option key={g.id} value={g.id}>{g.name}</option>})}
            </select>
            
        </div>
        
            <div className='list' >
                <p>Origen</p>
                <select  onChange={handleSelectO}>
                    <option selected value="all">all</option>
                    <option  value="api">api</option>
                    <option  value="db">db</option>
                </select>
                
            </div>
        </React.Fragment>
        
    )
}

export default Filter