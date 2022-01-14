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
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
