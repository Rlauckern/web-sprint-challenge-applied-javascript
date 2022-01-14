import axios from 'axios';


const Card = (article) => {
  author.classList.add('author');
  imageDiv.classList.add('img-container');
  cardHeadline.textContent = article.headline;
  authName.textContent = `By ${article.authorName}`;
  authImg.src = article.authorPhoto;

  cardDiv.appendChild(cardHeadline);
  cardDiv.appendChild(author);
  cardDiv.appendChild(imageDiv);
  imageDiv.appendChild(authImage);
  author.appendChild(authName);

  return cardDiv;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const appendCard = document.querySelector(selector);
  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    const topics = res.data.articles;
    const keys = Object.keys(topics);
    keys.forEach(key => {
      const topic = topics[key];
      topic.forEach(topic => {
        appendCard.appendChild(Card(topic));
      })
    })
  })
  .catch(error => {
    console.log(error);
  })

  const tabsAppender = (selector) => {
    axios.get('http://localhost:5000/api/topics')
    .then(res => {
      document.querySelector(selector).appendChild(Tabs(res.data.topics));
    })
    .catch(error => {
      console.error(error)
    })
  }
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
