import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import GradientBanner from '@/components/GradientBanner'
import { MdOutlineKeyboardArrowRight, } from 'react-icons/md'
import { GiPriceTag } from "react-icons/gi";
import painting from '../assets/painting.jpeg';



export default function Home() {




  return (
    <>
      <Navbar onLandingpage />
      <GradientBanner />
      <div className='w-full h-full px-5'>
        <div className="flex justify-between mt-20 pt-16 mx-[12%] max-md:mx-2 border-x dark:border-background/20 h-fit border-primary/20 pb-16 px-6">
          <div className="w-1/2 max-lg:w-full flex flex-col gap-5">
            <h1 className="text-7xl font-extrabold max-xl:text-6xl leading-tight text-primary">Social media and freelance work place for Artists</h1>
            <p className="text-primary/90 text-lg">Signup today to join the GrabArts artist community or purchase an artwork from the best artist you like</p>
            <div className="flex gap-8 mt-4 z-0 items-center">
              <Link href={"/artist"}><Button className=" rounded-3xl font-semibold pl-6 hover:bg-primary/80">Iam an Artist <MdOutlineKeyboardArrowRight className="h-5 w-5" />   </Button></Link>
              <Link href={'/shop'}><p className="text-primary hover:text-primary/60  font-bold flex text-sm justify-between cursor-pointer  h-full items-center">Shop now<MdOutlineKeyboardArrowRight className="h-5 w-5" /></p></Link>
            </div>
          </div>
          <div className="w-1/2 max-lg:hidden relative  flex justify-center  items-center ">
            <div className="absolute shadow-xl px-5 pt-5 py-7 right-0 h-full  w-3/4">
              <Image className=" w-full object-cover h-full rounded-lg shadow-inner bg-white/20  " src={painting} alt="" />
              <h1 className="flex items-center gap-2 text-sm font-thin p-1 justify-end text-primary/80"><GiPriceTag className="h-4 w-4 text-primary/20" /> FOR SALE</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
