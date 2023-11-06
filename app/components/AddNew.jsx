'use client'

import React from "react";
import { FaWindowClose } from 'react-icons/fa'


export default function AddNew(){
    function close(){
        document.getElementById('add-new').style.display = 'none'
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
                        <input className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="Name of the place..."></input>
                    </div>
                    <div>
                        <p>Location: </p>
                        <input className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="State, Country..."></input>
                    </div>
                    <div>
                        <p>Map link: </p>
                        <input className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="Enter the location link..."></input>
                    </div>
                    <div className="add-new flex justify-between">
                        <div className="flex flex-col">
                            <p>Start date:</p>
                            <input type="date" className="w-40 p-1 border-gray-200 shadow-lg border-2"></input>
                        </div>
                        <div className="flex flex-col">
                            <p>End date:</p>
                        <input type="date" className="w-40 p-1 border-gray-200 shadow-lg border-2"></input>
                        </div>
                    </div>
                    <div>
                        <p>Description</p>
                        <input className='w-full p-1 border-gray-200 shadow-lg border-2' placeholder="Enter a description, friends, weather, activities, etc..."></input>
                    </div>
                    <button className="my-1 bg-red-500 text-white w-40 p-2 rounded-lg mx-auto shadow-lg shadow-red-500/50 border-red-400 border-1">Add Trip</button>
                </div>
        </div>
    )
}