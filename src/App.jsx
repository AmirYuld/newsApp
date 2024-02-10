import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Router from './router/Router'
import { fetchNews } from './store/newsSlice'
import './styles/app.sass'
function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchNews())
	}, [])

	return <Router></Router>
}

export default App
