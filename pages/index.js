
import { Inter } from 'next/font/google'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipBackIcon, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume,  Maximize2} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' h-screen flex flex-col'>
      <div className='flex flex-1'>
          <aside className='w-72 bg-zinc-950 p-6 '>
            <nav className='space-y-5'>
               <Link href='/' className='flex items-center gap-4 text-sm font-semibold text-zinc-100'>
                <HomeIcon />
                Home
                </Link>
               <Link href='/' className='flex items-center gap-4 text-sm font-semibold text-zinc-100'>
                <Search />
                Search
                </Link>
              <Link href='/' className='flex items-center gap-4 text-sm font-semibold text-zinc-100'>
                <Library/>
                Your Library
                </Link>
            </nav>

              <nav className='mt-6 pt-6 border-t border-zinc-600 flex flex-col gap-3'>
              <Link href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil   </Link>
              <Link href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Aniver Funk   </Link>
              <Link href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Workout em casa  </Link>
              <Link href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Academia   </Link>



               </nav>
          </aside>
          <main className='flex-1 p-6'>
            <div className='flex items-center gap-3'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft/>
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight/>
              </button>
            </div>

            <h1 className='font-semibold text-3xl mt-10'> Boa tarde</h1>

            <div className='grid grid-cols-3 gap-4 mt-4'>
              <Link href="#" className='bg-white/10  group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong>Ícarus</strong>
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
                
                </Link>
             <Link href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors   overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
                </Link>
              <Link href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
                </Link>
              <Link href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
                </Link>
              <Link href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
                </Link>
              <Link href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
                </Link>
              <Link href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
                </Link>
              


            </div>

            <h2 className='font-semibold text-2xl mt-10'> Feito para você</h2>

            <div className='grid grid-cols-5 gap-4 mt-4'>
              <Link href='#' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10' >
              <Image  className='w-full' src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>BK, BK, BK and more</span>
              </Link>
              <Link href='#' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10' >
              <Image  className='w-full' src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>BK, BK, BK and more</span>
              </Link>
              <Link href='#' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image  className='w-full' src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500'>BK, BK, BK and more</span>
              </Link>
              <Link href='#' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image  className='w-full' src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500'>BK, BK, BK and more</span>
              </Link>
            </div>


          </main>
  
      </div>
      <footer className='bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
        <Image   src="/bk.jpeg" width={56} height={56} alt="imagem do melhor rapper do mundo!"/>
        <div className='flex flex-col gap-1'>
          <strong className='font-normal'> Ícarus</strong>
          <span className='text-xs text-zinc-400'>BK</span>
        </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='  text-zinc-200'/>
            <SkipBackIcon size={20} className='  text-zinc-200'/>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
              <Play/>
             </button>
             <SkipForward size={20} className='  text-zinc-200'/>
             <Repeat size={20} className='  text-zinc-200'/>

          </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-400'> 0:31</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600' >
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
              </div>
              
              <span className='text-xs text-zinc-400'> 2:40</span>

            </div>
        </div>
        <div className='flex items-center gap-4'>
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div className='flex items-center gap-2'>
              <Volume size={20}/>
              <div className='h-1 rounded-full w-24 bg-zinc-600' >
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
              </div>
            </div>
            <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
    
  )
}
