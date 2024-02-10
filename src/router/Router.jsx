import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Article from '../pages/Article'
import Home from '../pages/Home'
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/news/:id' element={<Article />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
