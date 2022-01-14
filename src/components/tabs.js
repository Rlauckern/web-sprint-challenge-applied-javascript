import axios from "axios";

const Tabs = (topics) => {
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');

  topics.forEach(topic => {
    const topicTab = document.createElement('div');
    topicTab.classList.add('tab');
    topicTab.textContent = topic;
    topicsDiv.appendChild(topicTab);
  })

  return topicsDiv;

}

const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
  .then(res => {
    document.querySelector(selector).appendChild(Tabs(res.data.topics));
  })
  .catch(error => {
    console.error(error)
  })
}
export { Tabs, tabsAppender }
