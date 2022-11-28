function* getSyncData(){
    yield 1;
    yield 2;
    yield 3;
}

const [a, b, c] = getSyncData();

console.log(`a - ${a}, b - ${b}, c - ${c}`);

console.log(`${[...getSyncData()]}`);

console.log(`${Array.from(getSyncData())}`);

console.log(`${Array.from(getSyncData(), x=> x*x)}`);

for(const x of getSyncData()){
    console.log(x);
}

const iteratable = getSyncData();
console.log(iteratable.next());
console.log(iteratable.next());
console.log(iteratable.next());
console.log(iteratable.next());