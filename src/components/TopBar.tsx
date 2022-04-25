import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <nav className='absolute text-white	 z-50 bg-slate-900 border-gray-200 px-2 sm:px-4 py-2.5  w-full'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a
          href='https://github.com/sidahmedabdelillah/react-ambient-canvas-backgrounds'
          className='flex items-center'
        >
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Github
          </span>
        </a>
        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='mobile-menu'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <li>
              <Link to="/" className='block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent pointer cursor-pointer md:p-0 dark:text-white'>
                Pipes
              </Link>
            </li>
            <li>
              <Link to="swirl" className='block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-white cursor-pointer md:p-0 dark:text-gray-400  dark:hover:bg-gray-700   '>
                Swirl
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
