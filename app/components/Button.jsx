'use client'
import React from "react";
import { FaPlusCircle } from 'react-icons/fa'

export default function Button(){
    function addNew() {
        document.getElementById('add-new').style.display = document.getElementById('add-new').style.display == 'none' ? 'flex' : 'none'
    }
    return (
        <button onClick={addNew} className="bg-white rounded-full border-red-500 border-3 text-red-500 text-8xl fixed bottom-2 right-2">
            <FaPlusCircle />
        </button>
    )
}