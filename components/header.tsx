import Link from 'next/link';

const Header = () => {
	return (
		<div className='p-3'>
			<p className='uppercase italic text-2xl font-bold text-indigo-700'>
				<Link href='/'>
					<a>Travel Plus</a>
				</Link>
			</p>
		</div>
	);
};

export default Header;
