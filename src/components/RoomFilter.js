import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

const getUnique=(items,value)=>{
    return[...new Set(items.map(item=>item[value]))];
}

export default function RoomFilter({rooms}){
   
    const context=useContext(RoomContext);
    const{
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context;
    
    let types=getUnique(rooms,"type");
    //add all types
    types=['all',...types];

    //map to jsx
    types=types.map((item,index)=>{
        return(
            <option value={item} key={index}>
                {item}
            </option>
        )
    })
    let people=getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return(
            <option key={index} value={item}>
                {item}
            </option>
        );
    });

    return(
       
        <section className="filter-container">
            <Title title="Search Rooms"/>
            
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
               
                    <label htmlFor="type">room type</label>
                    <select
                    name="type"
                    id="type"
                    value={type}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/* select guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity"
                    value={capacity}
                    className='form-group'
                    onChange={handleChange}>
                    {people}
                    </select>
                    
                </div>
                {/* end of select guest */}
                {/* room price */}
                <div className="form-group1">
                <label htmlFor="Price">Room Price ${price}</label>
                <input type="range"
                className="form-control"
                name="price"
                min={minPrice}
                max={maxPrice}
                id="price"
                value={price}
                onChange={handleChange}
/>             

                </div>
                {/* end of room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number"
                            className="size-inputs"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                        />
                        <input type="number"
                        className="size-input"
                        name="maxSize"
                        id="size"
                        value={maxSize}
                        onChange={handleChange}/>

                        
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox"
                            name="pets" 
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}