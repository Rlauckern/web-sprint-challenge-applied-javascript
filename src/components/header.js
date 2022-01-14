
  const Header = (title, date, temp) => {

    //instantiating elements
    const divHeader = document.createElement('div');
    const dateSpan = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const tempSpan = document.createElement('span');
    
    //setting class names, attributes
    divHeader.classList.add('header');
    dateSpan.classList.add('date');
    headerTitle.classList.add('h1');
    tempSpan.classList.add('temp');
    
    dateSpan.textContent = date;
    headerTitle.textContent = title;
    tempSpan.textContent = temp;
    
    //creating the structure
    divHeader.appendChild(dateSpan);
    divHeader.appendChild(headerTitle);
    divHeader.appendChild(tempSpan);
    
    return divHeader;
    
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const element = document.querySelector(selector);
  const add = element.appendChild(Header('Lambda Times', 'December 3, 2021', '43❄️' ));

return add;
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
