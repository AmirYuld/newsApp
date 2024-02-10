import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchNews = createAsyncThunk(
	'news/fetchNews',
	async function ({ limit = 10, page = 10 }) {
		console.log(limit, page)
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts',
				{
					params: {
						_limit: limit,
						_page: page,
					},
				}
			)
			const data = response.data
			const totalNews = response.headers['x-total-count']
			return { data: data, totalNews: totalNews }
		} catch (e) {
			console.log(e)
		}
	}
)

const todoSlice = createSlice({
	name: 'news',
	initialState: {
		news: [],
		status: null,
		error: null,
		totalNews: null,
	},
	reducers: {
		deleteArticle(state, action) {
			state.news = state.news.filter(
				article => article.id !== action.payload && article
			)
		},
		createArticle(state, action) {
			state.news.push(action.payload)
			state.totalNews = Number(state.totalNews) + 1
		},
	},

	extraReducers: builder =>
		builder
			.addCase(fetchNews.pending, (state, { payload }) => {
				state.status = 'loading'
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.status = 'resolved'
				state.news = action.payload.data
				state.totalNews = action.payload.totalNews
			})
			.addCase(fetchNews.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload
			}),
})

export const { deleteArticle, createArticle } = todoSlice.actions
export default todoSlice.reducer
