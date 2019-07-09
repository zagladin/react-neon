import React, { Component } from 'react';
import './News.scss';

import Loader from '../loader/Loader';

import axios from 'axios';

class News extends Component {
		constructor(props) {
				super(props);

				this.state = {
						titles: '',
						descriptions: '',
						articles: [],
						newsResource: 'google-news-ru',
						totalResults: '',
						loader: 'none',
				}

		}

		getNews(dataResource) {
				const url = 'https://newsapi.org/v2/top-headlines',
					resource = dataResource,
					apiKey = '01676b1d03984b97a1fe8635b7c59cd0';

				let entrypoint = `${url}?sources=${resource}&apiKey=${apiKey}`;

				this.setState({
						loader: 'block',
						articles: [],
				});

				axios.get(entrypoint)
					.then(res => {
							const articles = res.data.articles;
							const totalResults = res.data.totalResults;
							this.setState({
									articles, totalResults,
									loader: 'none',
									newsResource: dataResource
							},
								this.checkLinks
							);
					});

		};

		checkLinks() {
				let googleLink = document.getElementById("googleLink");
				let lentaLink = document.getElementById("lentaLink");

				if (this.state.newsResource === 'google-news-ru') {
						googleLink.classList.add("active-link");
						lentaLink.classList.remove("active-link");
				}
				if (this.state.newsResource === 'lenta') {
						lentaLink.classList.add("active-link");
						googleLink.classList.remove("active-link");
				}
		}

		componentDidMount() {
				this.getNews(this.state.newsResource);
		}


		render() {
				return (
					<div className="news-wrapper">
							<div className="news-selectors">
									<span id="googleLink" onClick={() => this.getNews('google-news-ru')}>Google</span>
									<span id="lentaLink" onClick={() => this.getNews('lenta')}>Lenta.ru</span>
									
									<hr/>
							</div>

							{this.state.articles.map((article, index) =>
								<li key={index} className="news-list">
										 {/*<img src={article.urlToImage}></img>*/}
										<a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
								</li>)}
							<Loader visibility={this.state.loader}/>
							<div className="copyright">
								powered by NewsAPI.org
							</div>
							<span className="refresh-button" role="img" aria-label="refresh" onClick={() => this.getNews(this.state.newsResource)}>
								🔄
							</span>
							
					</div>
				)
		}
}

export default News;
