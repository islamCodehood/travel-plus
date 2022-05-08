import Link from 'next/link';

const Custom404 = () => {
	return (
		<div className='w-100% h-screen flex flex-col justify-center items-center	bg-gray-800  space-y-2'>
			<p className='text-4xl text-gray-200'>404 | <span className='text-xl'>Page Not Found</span></p>
			<p>
				<Link href='/'>
					<a className='text-3xl text-indigo-400'>
						&#x2190; return home
					</a>
				</Link>
			</p>
		</div>
	);
};
export default Custom404;
