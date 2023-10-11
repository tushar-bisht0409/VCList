'use client'
import React, { FunctionComponent } from 'react'
import { IconContext } from 'react-icons';
import { RxPerson } from "react-icons/rx";

interface Navdata {
    name: string;
    route: string;
}

const NavbarButton : FunctionComponent<Navdata> = ({ name, route }) => {
  return (
    <div className='flex flex-row w-20vw overflow-hidden justify-start items-center mb-[10px]'>
        <div style={{marginRight: '13px', width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#E2E2DB', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}} >
            <IconContext.Provider value={{ size: "24px" }}>
                <RxPerson />
            </IconContext.Provider>
        </div>
        <text className="text-575751 cursor-pointer text-base font-semibold">{name}</text>
    </div>
  )
}

export default NavbarButton