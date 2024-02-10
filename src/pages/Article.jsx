import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Article.module.sass'
const Article = () => {
	const id = String(window.location.href).split('/')[
		String(window.location.href).split('/').length - 1
	]
	const articles = useSelector(state => state.news.news)
	const article = articles.filter(article => article.id == id)[0]
	const navigate = useNavigate()

	return (
		<div className={styles.container}>
			<div className={styles.article}>
				<ChevronLeft
					color='#8390FA'
					strokeWidth={5}
					onClick={() => navigate(-1)}
					className={styles.icon}
				/>
				<h1>{article.title}</h1>
				<p>{article.body}</p>
			</div>
		</div>
	)
}

export default Article
