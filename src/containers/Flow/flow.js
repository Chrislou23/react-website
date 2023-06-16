import React, { useEffect, useState } from 'react';
import Article from '../../components/Article/article';

function Flow() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const baseurl = 'https://dev-diogohevs.pantheonsite.io';
        const postsEndpoint = '/wp-json/wp/v2/posts';
        const category = '?categories=7';
        const tagArticle = '&tags=5';

        const responseArticles = await fetch(baseurl+postsEndpoint+category+tagArticle);

        const articles = await responseArticles.json();

        setArticles(articles);
      } catch (error) {
        console.error('Error fetching page content:', error);
      }
    };

    fetchPageContent();
  }, []);

  if (!articles) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section id="articles">
        {articles.map((article) => (
          <Article key={article.id} content={article} />
        ))}
      </section>
    </>
  );
}

export default Flow;
