
import { Inter } from 'next/font/google'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' h-screen flex flex-col'>
      <div className='flex flex-1'>
          <aside className='w-72 bg-zinc-950 p-6 '>
            <nav className='space-y-5'>
               <a href='/' className='flex items-center gap-4 text-sm font-semibold text-zinc-100'>
                <HomeIcon />
                Home
              </a>
               <a href='/' className='flex items-center gap-4 text-sm font-semibold text-zinc-100'>
                <Search />
                Search
              </a>
              <a href='/' className='flex items-center gap-4 text-sm font-semibold text-zinc-100'>
                <Library/>
                Your Library
              </a>
            </nav>

              <nav className='mt-6 pt-6 border-t border-zinc-600 flex flex-col gap-3'>
              <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil  </a>
              <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Aniver Funk  </a>
              <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Workout em casa </a>
              <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Academia  </a>
              



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
              <a href="#" className='bg-white/10  group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong>Ícarus</strong>
                <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
                
              </a>
             <a href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors   overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 hover:bg-white/20 transition-colors overflow-hidden '>
                
                <Image src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
                <strong> Ícarus </strong> 
                  <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play/>
                </button>
              </a>
              


            </div>

            <h2 className='font-semibold text-2xl mt-10'> Feito para você</h2>

            <div className='grid grid-cols-5 gap-4 mt-4'>
              <a href='#' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image  className='w-full' src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>BK, BK, BK and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image  className='w-full' src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>BK, BK, BK and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image  className='w-full' src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500'>BK, BK, BK and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image  className='w-full' src="/bk.jpeg" width={104} height={104} alt="imagem do melhor rapper do mundo!"/>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500'>BK, BK, BK and more</span>
              </a>
            </div>


          </main>
  
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between'>
        <div className='felx items-center gap-2'>
        <Image   src="/bk.jpeg" width={80} height={80} alt="imagem do melhor rapper do mundo!"/>
        <div className='flex flex-col'>
          <strong> Ícarus</strong>
          <span>BK'</span>
        </div>
        </div>
        <div>

        </div>
        <div>

        </div>
      </footer>
    </div>
    
  )
}
