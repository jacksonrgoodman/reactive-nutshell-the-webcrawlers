import React from "react";
import "./Article.css"
import { useHistory } from "react-router-dom";

// Single card render for one Article. it is how it will render on the dashboard,
export const ArticleCard = ({ article, handleDeleteArticle }) => { 

    //declaration used to determine who the logged in user is.
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

    const history = useHistory();
    
    //ternerary operation that determine if the edit adn delete buttons will appear.
    return (
    <div className="card">
        <div className="card-content">
            <p>Date Posted: {article.timestamp}</p>
            <h3>Headline: <span className="card-articleName">{article.title}</span></h3>
            <p>Synopsis: {article.synopsis}</p>
            <p><a href={article.url}>Link: {article.url}</a></p>
            <p>Posted by: {article.userId?.name}</p>
              {article.userId === currentUser ? 
                <>
                    <button type="button" onClick={() => history.push(`/articles/${article.id}/edit`)}> Edit </button>
                    <button type="button" onClick={() => handleDeleteArticle(article.id)}>DELETE</button>
                </>
                : null
                }
        </div>
    </div>
    )
};

//<p>Posted by: {article.userId.name}</p>
