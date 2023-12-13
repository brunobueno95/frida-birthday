
import './App.css'
import Frida from "./assets/frida.jpg"
import FridaDive from "./assets/frida-dive.jpg"
import Fmly from "./assets/fmly.jpeg"
import spaImg from "./assets/spa.jpg"
import Bubbles from "./assets/champagne.png"
import Sushi from "./assets/sushi.png"
import Chocolate from "./assets/chocolate.png"
import Knitting from "./assets/knitting.png"
import Flowers from "./assets/flower-bouquet.png"
import {useState} from "react"

function App() {
  
  const [giftOpen, setGiftOpen] = useState(false)
  const [extraGiftOpen, setExtraGiftOpen] = useState(false)

  return (
   
     
    <>
    <div className='flex h-screen w-screen flex-row justify-center relative  overflow-hidden'>
      <div className='h-full w-full absolute object-cover bg-[rgb(28,25,23,0.74)] z-10'/>
      <img src={Frida } alt="" className='h-full w-full object-cover absolute grayscale' />
    
    
      <p className=' font-whisper text-[110px] text-[#E175A5] w-full flex justify-center z-50 '> Happy birthday to my beautiful <span className='text-white ml-4'>  wife!</span></p>


      </div>


      <div className='h-auto w-full flex justify-center items-center flex-col pt-[40px] pb-[60px] gap-8'>
   
   <h1 className=' font-whisper text-[90px] text-[#E175A5] ml-[-60px] mb-4'  >18/12/1992</h1>
   <div className='w-[50%] text-pink-100 mt-[-20px]'>
   <p >Today is your birthday. And its a very special day. It's a day to stop and think about all your life journey and what an amazing person you are. 
    You have done a lot through this life, from being a football player, gymnastic, skier, diver, and a great radiologist. You have traveled the world, experienced different cultures, culinary and languaes. You have experienced things first hand, and now to tip it all you became a mom.  </p>
   

  
     
     </div>
   </div>
      
    <div className='flex h-screen w-screen flex-row justify-center relative  overflow-hidden'>
      <div className='h-full w-full absolute object-cover bg-[rgb(28,25,23,0.7)] z-10'/>
      <img src={FridaDive} alt="" className=' w-full object-cover absolute grayscale' />
      <div className=' w-1/2 '/>
      <div className='w-1/2 flex flex-col  z-20  items-center justify-center h-full' >
      <h1 className=' font-whisper text-[90px] text-[#E175A5] ml-[-60px] mb-4' >You</h1>
      <div className='w-[70%] text-pink-100'>
      <p >BBzinha, you are a perfect mother, an amazing person, hard worker, organized, very caring, and always gets the heart of everybody around you. 
        Everyone I know only have good things to say about you.   </p>
     <br/>
      <p>Its incredible how you are with my family, always keeping them updated on Luca,
        to my grandma who doesnt speak english and to the whats app group. 
        I know that they appreciate this big time! and 
        I would never manage to do such a good job as you!</p>
        
        </div>
      </div>
    </div>
    <div className='h-auto w-full flex -justify-center items-center flex-col pt-[40px] pb-[60px] gap-8'>
   
      <h1 className=' font-whisper text-[90px] text-[#E175A5] ml-[-60px] mb-4'  >Us</h1>
      <div className='w-[50%] text-pink-100 mt-[-20px]'>
      <p >We have been together for many years now, and have seen all sides of each other,
         we ve been through epic times and hard times together and I am very grateful 
         and happy to have you by my side through everything. I truly love you, and trust you with everyting and for everything!  </p>
      
 
     
        
        </div>
      </div>
   
    <div className='flex h-screen w-screen flex-row justify-center relative  overflow-hidden'>
      <div className='h-full w-full absolute object-cover bg-[rgb(28,25,23,0.74)] z-10'/>
      <img src={Fmly} alt="" className=' w-full object-cover absolute grayscale' />
    
      <div className='w-full py-4 z-20 px-8 flex  items-center flex-col justify-between'>
      <p className='l font-whisper text-[90px] text-[#E175A5]'>
         This here, means <span className='text-white'>everything</span> for me.  
      </p>

      </div>
     
    </div>
    <div className='h-auto w-full flex -justify-center items-center flex-col pt-[40px] pb-[60px] gap-8'>
   
   <h1 className=' font-whisper text-[90px] text-[#E175A5] ml-[-60px] mb-4'  >Celebration</h1>
   <div className='w-[50%] text-pink-100 mt-[-20px]'>
   <p >Its very easy to get stuck on the everyday and let things fall into routine. 
    This year has been tough on us, besides being incredible watching Luquinha evolve everyday. 
    It has been very challenging year for us, with many slepless nights. With that in mind, 
    I found the perfect birthday gift.  </p>

  
     
     </div>
   </div>
    <div className='flex h-screen w-screen flex-row justify-center relative  overflow-hidden'>
      <div className='h-full w-full absolute object-cover bg-[rgb(28,25,23,0.74)] z-10'/>
      <img src={spaImg} alt="" className='f-full w-full object-cover absolute grayscale' />
    
      <div className='w-full py-4 z-20 px-8 flex  items-center flex-col justify-center gap-8'>
    {
      giftOpen && (
        <div className='absolute top-[110px] bg-stone-900 rounded shadow-lg w-[900px] h-[500px]  items-center flex flex-col animate-scale-in-center'>
        <p className='font-whisper text-white text-[60px] mb-3' >A romantic night </p>
        <div className=' flex flex-col w-1/3  border-white justify-start mt-3 gap-3'>
        <div className='flex flex-row gap-2 items-center'><img src={Flowers} alt="" className='h-[55px]'/>  <p className=' text-[#E77563] ' >Flowers  </p></div>
        <div className='flex flex-row gap-2 items-center'><img src={Bubbles} alt="" className='h-[55px]'/>  <p className=' text-emerald-500 ' >Bottle of bubbles  </p></div>
       <div className='flex flex-row gap-2 items-center'><img src={Sushi} alt="" className='h-[55px]'/>  <p className=' text-[#FE7F60] ' > Sushi  </p></div>
       <div className='flex flex-row gap-2 items-center'><img src={Chocolate} alt="" className='h-[55px]'/>  <p className=' text-[#8D5FA7] ' > Chocolate  </p></div>
      { !extraGiftOpen && <p onClick={()=> setExtraGiftOpen(true)} className=' mt-4 font-whisper text-[45px] flex w-full justify-center text-white hover:text-[#E175A5] cursor-pointer'> extra gift</p>}
        { extraGiftOpen && <div className='flex flex-row gap-2 items-center mt-4 animate-scale-in-center '><img src={Knitting} alt="" className='h-[55px]'/> <p className=' text-[#E91E63] ' > Knitting materials </p></div>}
        </div>
       
     
      </div>
      )
    }
   
      <button onClick={()=>{setGiftOpen(!giftOpen)}}
       className='absolute bottom-10 cursor-pointer border-2 border-[#E175A5] rounded p-6 h-[90px] w-[280px] bg-stone-900 shadow-lg flex items-center justify-center font-whisper text-[60px] text-[#E175A5] hover:bg-[#E175A5] hover:text-stone-900 hover:border-stone-900'>{!giftOpen ? "Open Gift" : "Close"} </button>
      </div>
     
    </div>
    </>
  )
}

export default App
