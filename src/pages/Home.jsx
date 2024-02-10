import React from 'react'
import CreateArticle from '../components/CreateArticle/CreateArticle'
import NewsList from '../components/NewsList/NewsList'
import PageController from '../components/PageController/PageController'
const Home = () => {
	return (
		<>
			<CreateArticle></CreateArticle>
			<NewsList></NewsList>
			<PageController></PageController>
		</>
	)
}

export default Home
