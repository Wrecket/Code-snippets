const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params : {
			// API key add on to web address
			apikey : 'd558e5a9',
			// Search keyword
			s      : searchTerm
			// specific movie search when ID has been found via search request
			// i      : 'tt0848228'
		}
	});

	console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};

const onInput = debounce((event) => {
	fetchData(event.target.value);
});
input.addEventListener('input', debounce(onInput, 500));
