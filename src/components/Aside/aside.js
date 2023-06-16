import React from "react";


function Aside({content}) {

    return (
        <aside>
            <div dangerouslySetInnerHTML={{ __html: content.content.rendered }}></div>
        </aside>
    );
  }

  export default Aside;

function decodeHTMLEntities(text) {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element.innerText;
}