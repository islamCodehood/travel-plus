import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='p-6 bg-gray-800 h-20 w-100% flex flex-col justify-center align-center'>
      <div className='w-1/4'>
      <p className='uppercase italic text-xl font-bold text-indigo-700'>
				<Link href='/'>
					<a>Travel Plus</a>
				</Link>
			</p>
      </div>
      <div className='w-1/2'>
        <p className='capitalize text-sm text-white'>all rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer