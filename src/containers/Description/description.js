import React, { useEffect, useState } from 'react';
import Article from '../../components/Article/article';
import Aside from '../../components/Aside/aside';

function Description() {
  const [articles, setArticles] = useState(null);
  const [aside, setAside] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const baseurl = 'https://dev-diogohevs.pantheonsite.io';
        //const pagesEndpoint = '/wp-json/wp/v2/pages';
        const postsEndpoint = '/wp-json/wp/v2/posts';
        //const pageSlug = '?slug=description';
        const category = '?categories=4';
        const tagArticle = '&tags=5';
        const tagAside = '&tags=6';

        const responseArticles = await fetch(baseurl+postsEndpoint+category+tagArticle);
        const responseAside = await fetch(baseurl+postsEndpoint+category+tagAside);

        const articles = await responseArticles.json();
        const aside = await responseAside.json();

        setArticles(articles);
        setAside(aside[0]);
      } catch (error) {
        console.error('Error fetching page content:', error);
      }
    };

    fetchPageContent();
  }, []);

  if (!articles || !aside) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section id="articles">
        {articles.map((article) => (
          <Article key={article.id} content={article} />
        ))}
      </section>
      <Aside content={aside} />
    </>
  );
}

export default Description;
