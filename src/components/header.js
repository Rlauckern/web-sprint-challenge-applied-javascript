
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
    

}

const headerAppender = (selector) => {
  const element = document.querySelector(selector);
  const add = element.appendChild(Header('Lambda Times', 'December 3, 2021', '43❄️' ));

return add;
}

export { Header, headerAppender }
