import { Trash2 } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteArticle } from '../../store/newsSlice'
import styles from './NewsItem.module.sass'

const NewsItem = ({ article }) => {
	const dispatch = useDispatch()
	const router = useNavigate()
	return (
		<div
			className={styles.newsItem}
			onClick={e => {
				console.log(e.currentTarget.tagName)
				router(`/news/${article.id}`)
			}}
		>
			<span>{article.id}</span>
			<h4>{article.title}</h4>
			<div className={styles.actions}>
				<Trash2
					onClick={e => {
						e.stopPropagation()
						dispatch(deleteArticle(article.id))
					}}
					className={styles.icon}
					color='#EE4266'
				></Trash2>
			</div>
		</div>
	)
}

export default NewsItem
