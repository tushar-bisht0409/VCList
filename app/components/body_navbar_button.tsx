'use client'
import React, { FunctionComponent } from 'react'
import { IconContext } from 'react-icons';
import { RxPerson } from 'react-icons/rx';

interface Profiledata {
    name: string;
}
const BodyNavbarButton : FunctionComponent<Profiledata> = ({ name }) => {
  return (
    <button className='flex flex-row justify-start items-center rounded-md px-4 py-2 border-2 border-gray-100 mb-2'>
        <IconContext.Provider value={{ size: "18px", color: 'grey' }}>
            <RxPerson />
        </IconContext.Provider>
        <p className='ml-2 text-[14px] font-medium text-gray-400'>{name}</p>
    </button>
  )
}

export default BodyNavbarButton