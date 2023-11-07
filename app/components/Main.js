'use client'

import React from 'react'
import data from '../data.js'
import { FaMapMarker } from 'react-icons/fa'
import { ref, onValue } from "firebase/database";
import { db } from '../firebase.js';





export default function Main(){
    const [ tripArray, setTripArray ] = React.useState('')
    

    React.useEffect(function(){
        const places = ref(db, 'places/');
        onValue(places, (snapshot) => {
        const data = snapshot.val();
        setTripArray(Object.values(data))
        });
    }, [ ])

    return (
        tripArray ? tripArray.map(i => {
                return (
                    <div className='overflow-x-hidden flex w-full border-2 rounded-xl border-red-400 my-2 shadow-lg shadow-red-400/50'>
                        <div className='flex m-4 gap-4 text-lg'>
                                <div className='img w-80 m-auto' style={{backgroundImage: `url(${i.link})`}}></div>
                                <div className='flex flex-col justify-center p-4'>
                                    <div className='flex gap-4'>
                                        <div className='flex items-center'>
                                            <FaMapMarker className='text-red-500'/>
                                            <p>{i.place}</p>
                                        </div>
                                            <a className='text-lg text-gray-400 underline decoration-1 underline-offset-2' href={i.link} target='_blank'>View on Google Maps</a>
                                    </div>
                                    <h2 className='text-xl font-bold m-2 mb-0 ml-0'>{i.location}</h2>
                                    <p className='date text-gray-400'>Date: {i.startDate} - {i.endDate}</p>
                                    <p className='desc text-lg text-gray-800'>{i.desc}</p>
                                </div>
                        </div>
                    </div>
                )
        }) : ''
    ) 
}

