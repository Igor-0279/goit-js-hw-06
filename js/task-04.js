const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector('#value');

const counter = {
    value: 0,
    increment(value){
        this.value +=1;
    },
    decrement(value){
        this.value -= 1;
    },
};
decrementBtn.addEventListener('click', function(){
    counter.decrement();
    valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', function(){
    counter.increment();
    valueEl.textContent = counter.value;
});