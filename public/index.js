async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const refreshButton = document.querySelector('#refresh-button');

    let counterStart = await fetch('http://127.0.0.1:9001/counter')

    let result = await counterStart.json();

    countValue = result.value;

    // console.log(countValue)

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    async function refresh(){
        let counterStart = await fetch('http://127.0.0.1:9001/counter')

        let result = await counterStart.json();

        countValue = result.value;

        countContainer.textContent = countValue;

    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refresh)
    countContainer.textContent = countValue;

}

main()