import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
	'x-rapidapi-key': '651f129c5dmsh77b3f9006c2b46fp169f6ajsn82622810010b',
};
const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({
	url,
	headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;