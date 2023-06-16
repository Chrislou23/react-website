import React, { useEffect, useState } from 'react';


function Table({content}) {
    return (
        <article>
            <div dangerouslySetInnerHTML={{ __html: content.content.rendered }} />
        </article>
    );
}

export default Table;

function decodeHTMLEntities(text) {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element.innerText;
}