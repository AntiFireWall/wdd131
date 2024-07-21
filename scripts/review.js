let reviewCount = getCount();
function test() {
    let count = ++reviewCount;
    setCount();
    console.log(`Review Count: ${reviewCount}`);
};

function getCount(){
    return JSON.parse(localStorage.getItem('count'));
}

function setCount(){
    localStorage.setItem('count', JSON.stringify(reviewCount));
}

test();
