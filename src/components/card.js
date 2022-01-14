import axios from 'axios';


const Card = (article) => {
  const cardDiv = document.createElement('div');
const cardHeadline = document.createElement('div');
const author = document.createElement('div');
const imageDiv = document.createElement('div');
const authImage = document.createElement('img');
const authName = document.createElement('span');

//set classes and attributes
cardDiv.classList.add('card');
cardHeadline.classList.add('headline');
author.classList.add('author');
imageDiv.classList.add('img-container')
cardHeadline.textContent = article.headline;
authName.textContent = `By ${article.authorName}`;
authImage.src = article.authorPhoto;

//create structure
cardDiv.appendChild(cardHeadline);
cardDiv.appendChild(author);
author.appendChild(imageDiv);
imageDiv.appendChild(authImage);
author.appendChild(authName);

return cardDiv;
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
  
}

export { Card, cardAppender }
