import React, { useEffect, useState } from 'react';


function Article({content}) {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        const fetchPageContent = async () => {
        try {
            const baseurl = 'https://dev-diogohevs.pantheonsite.io';
            const usersEndpoint = '/wp-json/wp/v2/users';
            const id = '?id=';

            const responseAuthor = await fetch(baseurl+usersEndpoint+id+content.author);
            const author = await responseAuthor.json();

            setAuthor(author[0]);
        } catch (error) {
            console.error('Error fetching page content:', error);
        }
        };

        fetchPageContent();
    }, []);

    if (!author) {
        return <p>Loading...</p>;
    }

    const modifiedDate = new Date(content.modified_gmt);
    const formattedDate = `${modifiedDate.toLocaleDateString()} at ${modifiedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    return (
        <article>
            <header>
                <h2>{decodeHTMLEntities(content.title.rendered)}</h2>
                <p>By {author.name} the {formattedDate}</p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: content.content.rendered }} />
        </article>
    );
}

export default Article;

function decodeHTMLEntities(text) {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element.innerText;
}