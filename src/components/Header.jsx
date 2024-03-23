import { useState, useEffect } from "react"

export const Header = () => {

  const [darkMode, setdarkMode] =useState(false)

    const handleClick =() =>{
      setdarkMode(!darkMode)
    }

    useEffect(()=>{
      if(darkMode){
        document.documentElement.classList.add('dark')
      }
      else{
        document.documentElement.classList.remove('dark')
      }
    }, [darkMode])

  return (
    <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[560px] lg:mb-[320px]  xl:mb-[290px] sm:mb-[530px]">
    <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-0">Social Media Dashboard</h1>
    <div className="md:flex md:justify-between items-center ">
    <p className="text-Dark-Grayish-Blue  dark:text-Desaturated-Blue font-bold mb-0">Total Followers: 23,004</p>
    <hr className="bg-black mb-[19px] lg:hidden xl:hidden"/>
    <div className="flex items-center">
        <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold  mr-auto  md:mb-7  mb-3 md:mr-4 lg:mr-4 xl:mr-4">Dark mode </p>
        <label htmlFor="darkmode" className="border bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[3px] relative overflow-hidden md:mb-7   mb-3">
        <input onClick={handleClick} type="checkbox" id="darkmode" className="peer sr-only"/>
        <div className="peer-checked:bg-Toggle-Gradient absolute top-0 left-0 w-full h-full"></div>
        <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[20px] transition-all"></div>
        </label>
    </div>
    </div>
    </header>
  )
}
