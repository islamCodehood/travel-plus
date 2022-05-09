import { GetStaticPaths, GetStaticProps } from 'next';
import { places } from '../../data/placesData.js';
import Image from 'next/image';
import Link from 'next/link'

type placePageProps = {
	placeName: string;
	details: string;
	imgURL: string;
	images: {urls: {small: string}}[];
	
};
const Place = ({ placeName, details, imgURL, images }: placePageProps) => {
	return (
		<div>
			<div className='w-100% h-96 relative'>
				<Image
					src={imgURL}
					layout='fill'
					objectFit='cover'
					alt='Hero Image'
					priority={true}
				/>
				<h1 className='absolute bottom-0 p-10 text-white text-4xl capitalize font-bold'>
					{placeName}
				</h1>
			</div>
		
      <div className='lg:px-32 py-10'>
				<p className='text-lg'>{details}</p>
			</div>
      <div className='p-3'>
				<h2 className='text-xl font-semibold text-gray-800'>Other Photos</h2>
			</div>
			<div className='flex overflow-auto'>
				{images.map((image, idx) => (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						key={idx}
						src={image.urls.small}
						alt={placeName}
						className='w-96 h-72'
					/>
				))}
			</div>			
		</div>
	);
};




export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: places.map(place => {
			return { params: { placeName: place.placeName } };
		}),
		fallback: false,
	};
};





export const getStaticProps: GetStaticProps = async ({ params }) => {

	const request = await fetch(
		`https://api.unsplash.com/search/photos?query=${params?.placeName}&orientation=landscape&client_id=7c07e16352a1d717b5dbdf66acc4b334a19bc004be2d278e7ded4b7f3239b0e7`
	);
	const data = await request.json();

	return {
		props: {
			placeName: params?.placeName,
			details: places.filter(place => place.placeName === params?.placeName)[0].details,
			imgURL: places.filter(place => place.placeName === params?.placeName)[0].imgURL,
			images: data.results,
		},
	};
};

export default Place;
