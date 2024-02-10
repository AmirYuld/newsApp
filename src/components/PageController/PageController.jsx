import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../store/newsSlice'
import styles from './PageController.module.sass'
const PageController = () => {
	const totalNews = useSelector(state => state.news.totalNews)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)

	const dispatch = useDispatch()
	let pages = []
	for (let i = 1; i <= Math.ceil(totalNews / limit); i++) {
		pages.push(i)
	}
	useEffect(() => {
		let reversePage = Number(pages[pages.length - 1]) - Number(page) + 1
		if (!reversePage) {
			reversePage = 10
		}

		dispatch(fetchNews({ limit: limit, page: reversePage }))
	}, [page])

	const handleClick = p => {
		setPage(p)
	}

	return (
		<div className={styles.container}>
			<div className={styles.pageBtns}>
				{pages.map(p => (
					<button
						key={p}
						onClick={() => handleClick(p)}
						className={`${page === p && styles.activePage}`}
					>
						{p}
					</button>
				))}
			</div>
		</div>
	)
}

export default PageController
