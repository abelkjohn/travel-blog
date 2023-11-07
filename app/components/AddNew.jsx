'use client'

import React from "react";
import { FaWindowClose } from 'react-icons/fa'
import { ref, set } from "firebase/database";
import { db } from "../firebase"
import { nanoid } from 'nanoid'




export default function AddNew(){
    
    const [ place, setPlace ] = React.useState('')
    const [ location, setLocation ] = React.useState('')
    const [ link, setLink ] = React.useState('')
    const [ startDate, setStartDate ] = React.useState('')
    const [ endDate, setEndDate ] = React.useState('')
    const [ desc, setDesc ] = React.useState('')
    const [ locationLink, setLocationLink ] = React.useState('')

    
    
    
    function close(){
        document.getElementById('place').value = ''
        document.getElementById('location').value = ''
        document.getElementById('link').value = ''
        document.getElementById('startDate').value = ''
        document.getElementById('endDate').value = ''
        document.getElementById('desc').value = ''
        document.getElementById('locationLink').value = ''
        document.getElementById('add-new').style.display = 'none'
    }

    function post(e){
        e.preventDefault()
        const id = nanoid()

        set(ref(db, 'places/' + id), {
            place: place,
            location: location,
            locationlink: locationLink,
            link: link,
            startDate: startDate,
            endDate: endDate,
            desc: desc,
            id: id,
        });


        close()
    }
    
    return (
            <div id='add-new' className="hidden bg-white add-new fixed flex-col center-element w-96 h-max border-2 shadow-lg shadow-red-400 border-red-400 rounded-xl overflow-hidden">
                <div className=" flex justify-between bg-red-500 shadow-lg shadow-red-400/50 text-white p-3">
                    <h1 className="font-bold text-lg">Add Trip Details: </h1>
                    <div onClick={close} className="text-3xl"><FaWindowClose /></div>
                </div>
                <div  className="gap-3 p-3  flex flex-col">
                    <div>
                        <p>Place:</p>
                        <input required id="place" className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="Name of the place..." onChange={e => setPlace(e.target.value)}></input>
                    </div>
                    <div>
                        <p>Location: </p>
                        <input  id="location" required className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="State, Country..."  onChange={e => setLocation(e.target.value)}></input>
                    </div>
                    <div>
                        <p>Location Image Link: </p>
                        <input  id="locationLink" required className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="Link for img"  onChange={e => setLocationLink(e.target.value)}></input>
                    </div>
                    <div>
                        <p>Map link: </p>
                        <input id="link" required className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="Enter the location link..."  onChange={e => setLink(e.target.value)}></input>
                    </div>
                    <div className="add-new flex justify-between">
                        <div className="flex flex-col">
                            <p>Start date:</p>
                            <input id="startDate" required type="date" className="w-40 p-1 border-gray-200 shadow-lg border-2"  onChange={e => setStartDate(e.target.value)}></input>
                        </div>
                        <div className="flex flex-col">
                            <p>End date:</p>
                        <input id="endDate" required type="date" className="w-40 p-1 border-gray-200 shadow-lg border-2"  onChange={e => setEndDate(e.target.value)}></input>
                        </div>
                    </div>
                    <div>
                        <p>Description</p>
                        <input id="desc" required className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="Enter a description, friends, weather, activities, etc..."  onChange={e => setDesc(e.target.value)}></input>
                    </div>
                    <button className="my-1 bg-red-500 text-white w-40 p-2 rounded-lg mx-auto shadow-lg shadow-red-500/50 border-red-400 border-1" onClick={e => post(e)}>Add Trip</button>
                </div>
        </div>
    )
}