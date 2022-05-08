export const getPlacesNames = places => {
	const names = places.map(place => {
		return { params: { placeName: place.placeName } };
	});
	return names;
};

export const getPlacesDetailsByName = (places, placeName) => {
  const placeDetails = places.filter(place => place.placeName === placeName)[0].details;
	return placeDetails
};

export const getImageUrlByName = (places, placeName) => {
	const imageUrl = places.filter(place => place.placeName === placeName)[0].imgURL;
	return imageUrl;
}