'use client'
import React, { FunctionComponent } from 'react'
import { IconContext } from 'react-icons';
import { RxPerson } from "react-icons/rx";

interface Profiledata {
    name: string;
    org: string;
    url: string;
}
const ProfileCard : FunctionComponent<Profiledata> = ({ name, org, url }) => {
  return (
    <div className='cursor-pointer flex flex-col justify-start items-center'>
        <img className='object-cover w-[100px] h-[100px] rounded-full' src={url}/>
        <p className='text-black text-[17px] font-semibold mt-4' >{name}</p>
        <p className='text-gray-500 text-[14px] font-normal mb-2'>{org}</p>
        <div className='flex flex-row w-[100px] justify-between items-center'>
        <div style={{ width: '30px', height: '30px', borderRadius: '5px', backgroundColor: '#E2E2DB', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}} >
            <IconContext.Provider value={{ size: "15px" }}>
                <RxPerson />
            </IconContext.Provider>
        </div>
        <div style={{ width: '30px', height: '30px', borderRadius: '5px', backgroundColor: '#E2E2DB', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}} >
            <IconContext.Provider value={{ size: "15px" }}>
                <RxPerson />
            </IconContext.Provider>
        </div>
        <div style={{ width: '30px', height: '30px', borderRadius: '5px', backgroundColor: '#E2E2DB', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}} >
            <IconContext.Provider value={{ size: "15px" }}>
                <RxPerson />
            </IconContext.Provider>
        </div>
        </div>
    </div>
    )
}

export default ProfileCard