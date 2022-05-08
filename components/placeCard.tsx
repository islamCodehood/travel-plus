import Image from 'next/image';
import Link from 'next/link';

type placeProps = {
	placeName: string;
	details: string;
	imgURL: string;
};
const PlaceCard = ({ placeName, details, imgURL }: placeProps) => {
	return (
		<div className='flex flex-col justify-center items-center w-60 h-80 rounded shadow-md mt-6'>
			<Image
				className='rounded-t'
				src={imgURL}
				height={240}
				width={240}
				alt={placeName}
			/>
			<div className='py-3 px-5 space-y-2'>
				<h2 className='text-xl font-semibold capitalize'>{placeName}</h2>
				<p className='text-sm'>{`${details.substring(0, 150)}...`}</p>
				<div>
					<Link href={`/places/${placeName}`} className='mt-4'>
						<a className='mt-4 text-sm text-indigo-500'>More details</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PlaceCard;
