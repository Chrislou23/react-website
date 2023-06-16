import React, { useEffect, useState } from 'react';
import Article from '../../components/Article/article';
import Aside from '../../components/Aside/aside';
import Table from '../../components/Table/table';

function Logbook() {
  const [articles, setArticles] = useState(null);
  const [aside, setAside] = useState(null);
  const [table, setTable] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const baseurl = 'https://dev-diogohevs.pantheonsite.io';
        const postsEndpoint = '/wp-json/wp/v2/posts';
        const category = '?categories=9';
        const tagArticle = '&tags=5';
        const tagAside = '&tags=6';
        const tagTable = '&tags=10';

        const responseArticles = await fetch(baseurl+postsEndpoint+category+tagArticle);
        const responseAside = await fetch(baseurl+postsEndpoint+category+tagAside);
        const responseTable = await fetch(baseurl+postsEndpoint+category+tagTable);

        const articles = await responseArticles.json();
        const aside = await responseAside.json();
        const table = await responseTable.json();

        setArticles(articles);
        setAside(aside[0]);
        setTable(table[0]);
      } catch (error) {
        console.error('Error fetching page content:', error);
      }
    };

    fetchPageContent();
  }, []);

  if (!articles || !aside || !table) {
    return <p>Loading...</p>;
  }

  return (
    <>
        <section id="articles">
            <h2 class="section-title">Logbook</h2>
            <Table content={table} />
            <h2 class="section-title">Other already done tasks</h2>
            {articles.map((article) => (
                <Article key={article.id} content={article} />
            ))}
        </section>
        <Aside content={aside} />
    </>
  );
}

export default Logbook;