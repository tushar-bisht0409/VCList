import Image from 'next/image'
import NavbarButton from './components/navbar_button/navbar_button'
export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-row items-start mx-auto justify-center'>
      <div className='w-[280px] h-screen bg-clip-border flex-column flex-none justify-between sticky top-0 pt-14 pl-5'>
        <img className='w-40 object-fill mb-12 mt--2 mr-11' src='https://assets-global.website-files.com/62f3f3ccd0cfd515f3b095e4/631a2ec079589614db2b5fc4_grayvcsheet.svg'></img>
          <NavbarButton name={'Browse Investors'} route={'investors'}/>
          <NavbarButton name={'Browse Funds'} route={'investors'}/>
          <NavbarButton name={'Browse Reporters'} route={'investors'}/>
          <NavbarButton name={'Browse Sheets'} route={'investors'}/>
          <NavbarButton name={'Home'} route={'investors'}/>
      </div>
      <div className=' w-[1050px] h-screen overflow-scroll'>
        <div style={{ width: '1050px', height: '440px', borderBottomLeftRadius: '70px', borderBottomRightRadius: '10px' }}>
        <div style={{zIndex: '999', position: 'absolute', background: 'linear-gradient(rgba(23, 15, 29, 0.89), rgba(23, 15, 29, 0.89))', width: '1050px', height: '440px', borderBottomLeftRadius: '70px', borderBottomRightRadius: '10px' }}></div>
          <img style={{ width: '1050px', height: '440px', borderBottomLeftRadius: '70px', borderBottomRightRadius: '10px' }} src={"https://assets-global.website-files.com/62f3f3ccd0cfd515f3b095e4/631982fbbd8af588102b1cea_abstract-wave-surface-2022-08-04-01-41-50-utc (1)-poster-00001.jpg"}/>
        </div>
      </div>
    </div>
  )
}
