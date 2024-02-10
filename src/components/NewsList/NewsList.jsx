import React from 'react'
import { useSelector } from 'react-redux'
import NewsItem from '../NewsItem/NewsItem'
import styles from './NewsList.module.sass'
const NewsList = () => {
	const data = useSelector(state => state.news.news)
	const news = [...data].reverse()

	return (
		<div className={styles.container}>
			<div className={styles.newsList}>
				{news.map(article => (
					<NewsItem article={article} key={article.id}></NewsItem>
				))}
			</div>
		</div>
	)
}

export default NewsList
