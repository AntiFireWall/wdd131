let reviewCount = getCount();
function countReview() {
    let count = ++reviewCount;
    setCount();
    console.log(`Request Count: ${reviewCount}`);
};

function getCount(){
    return JSON.parse(localStorage.getItem('count'));
}

function setCount(){
    localStorage.setItem('count', JSON.stringify(reviewCount));
}

countReview();