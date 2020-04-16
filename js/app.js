document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  form.reset();
  // form.addEventListener('reset', handleFormSubmit);

  // const formReset = document.querySelector('#new-item-form');
  // formReset.addEventListener('reset', handleFormReset);

});

const handleFormSubmit = function(event) {
  event.preventDefault();
  // console.log(event.target.title.value);
  // console.log(event.target.author.value);
  // console.log(event.target.category.value);
  const resultParagraph = document.querySelector('#reading-list');
  resultParagraph.textContent = `Book Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`
}

// const handleFormReset =
function logReset(event) {
  // console.log(event);
}
