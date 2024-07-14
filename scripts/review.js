let reviewCount = getCount();
async function test() {
    let count = await ++reviewCount;
    setCount();
    console.log(reviewCount);
};

function getCount(){
    return JSON.parse(localStorage.getItem('count'));
}

function setCount(){
    localStorage.setItem('count', JSON.stringify(reviewCount));
}

test();
