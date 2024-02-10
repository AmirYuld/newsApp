import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createArticle } from '../../store/newsSlice'
import styles from './CreateArticle.module.sass'
const CreateArticle = () => {
	const [articleTitle, setArticleTitle] = useState('')
	const [articleBody, setArticleBody] = useState('')
	const dispatch = useDispatch()

	const handleForm = e => {
		e.preventDefault()

		if (articleTitle && articleBody) {
			setArticleTitle('')
			setArticleBody('')
			const article = {
				userId: Math.round((Number(Date.now()) % 1000000) + 1),
				id: Math.round(Number(Date.now()) % 1000000),
				title: articleTitle,
				body: articleBody,
				completed: false,
			}

			dispatch(createArticle(article))
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.createTodo}>
				<form onSubmit={e => handleForm(e)}>
					<input
						value={articleTitle}
						onChange={e => setArticleTitle(e.target.value)}
						type='text'
						placeholder='title'
					/>
					<input
						value={articleBody}
						onChange={e => setArticleBody(e.target.value)}
						type='text'
						placeholder='body'
					/>
					<button>Add</button>
				</form>
			</div>
		</div>
	)
}

export default CreateArticle
