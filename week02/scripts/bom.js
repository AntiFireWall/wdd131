const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapertList();// || [];

button.addEventListener('click', async function() {
    if (input.value.trim() !== ''){
        displayList(input.value);
        await chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    };
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus();
    });
};

function setChapterList() {
    localStorage.setItem('BOMchapterList', JSON.stringify(chaptersArray));
};

function getChapertList() {
    return JSON.parse(localStorage.getItem('BOMchapterList'))
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}