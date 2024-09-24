// commone function   
function mainBlance(donate, mainBlance) {

    const mainResult = mainBlance - donate;
    return mainResult;

}
function donateSum(donate, donateBlance) {
    const sum = donateBlance + donate;
    return sum;

}
// blog function---------

document.getElementById('btn-click').addEventListener('click',function(){
    window.location.href ="blog.html"
})


const historyBtns = document.getElementById('history-btn')
const donationBtns = document.getElementById('donation-btn');
const history = document.getElementById('history-list');
const allCard = document.getElementById('card-all')
const footers = document.getElementById('footer')
// history
historyBtns.addEventListener('click',function(){

    historyBtn.classList.add('bg-[#B4F461]')
    donationBtn.classList.remove('bg-[#B4F461]')
    allCard.classList.add('hidden')
    history.classList.remove('hidden')
    footers.classList.add('hidden')
 
    // some thing in there
    
    
})
donationBtns.addEventListener('click',function(){

    donationBtn.classList.add('bg-[#B4F461]')
    historyBtn.classList.remove('bg-[#B4F461]')
    allCard.classList.remove('hidden')
    history.classList.add('hidden')
    footers.classList.remove('hidden')
})

// first coice
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const historySection = document.getElementById('history-section');
const donationSection = document.getElementById('card-all');
const donateBalancce = document.getElementById('donate-blance1');
const mainBlanceEl = parseFloat(document.getElementById('mian-balance').innerText);
const historyTeextChange = document.getElementById('history-text');
console.log(mainBlanceEl);


// card 1
document.getElementById('noakhali-btn').addEventListener('click', function () {
    const inputvalue1 = parseFloat(document.getElementById('noakhali-input').value);
    if (inputvalue1 <= 0 || mainBlanceEl < inputvalue1 || isNaN(inputvalue1)) {
        alert("Your amount in Invalid");

    }
    else {
        const cardBlan3 = parseFloat(document.getElementById('noakhali-donet').innerText);
        const sum = donateSum(inputvalue1, cardBlan3);
        document.getElementById('noakhali-donet').innerText = sum;
        const divide = mainBlance(inputvalue1, mainBlanceEl);
        document.getElementById('mian-balance').innerText = divide;



        
        const historyItem = document.createElement('div');
        historyItem.className = 'border-2 p-5 rounded-md w-11/12 mx-auto mb-5'
        historyItem.innerHTML = `
        <h1 class="font-bold text-xl "> <span id="history-balance">96500</span> Donate for Flood at Noakhali, Bangladesh </h1>
        <p id="date"></p>
        `;
            const historyList = document.getElementById("history-list");
            historyList.insertBefore(historyItem, historyList.firstChild)
            document.getElementById('history-balance').innerText = inputvalue1;
            const dates = 'Date : ';
            const currentDate = new Date();
            document.getElementById('date').innerText = dates + currentDate.toString();


            // congratulation interface
            document.getElementById('noakhali-input').value = '';
            document.getElementById('noakhali-btn').addEventListener(onclick = my_modal_5.show());

    }


})


// card 2
document.getElementById('feni-btn').addEventListener('click', function () {
    const inputvalue = parseFloat(document.getElementById('feni-input').value);
    if (inputvalue <= 0 || mainBlanceEl < inputvalue || isNaN(inputvalue)) {
        alert("Your amount in Invalid");

    }
    else {
        const cardBlan3 = parseFloat(document.getElementById('fani-donet').innerText);
        const sum = donateSum(inputvalue, cardBlan3);
        document.getElementById('fani-donet').innerText = sum;
        const divide = mainBlance(inputvalue, mainBlanceEl);
        document.getElementById('mian-balance').innerText = divide;


        const historyItem = document.createElement('div');
        historyItem.className = 'border-2 p-5 rounded-md w-11/12 mx-auto mb-5'
        historyItem.innerHTML = `
        <h1 class="font-bold text-xl "> <span id="history-balance">96500</span> Donate for Flood Relief in Feni,Bangladesh </h1>
        <p id="date"></p>
        `;
            const historyList = document.getElementById("history-list");
            historyList.insertBefore(historyItem, historyList.firstChild)
            document.getElementById('history-balance').innerText = inputvalue;
            const dates = 'Date : ';
            const currentDate = new Date();
            document.getElementById('date').innerText = dates + currentDate.toString();

            // congratulation interface
            document.getElementById('feni-input').value = '';
            document.getElementById('feni-btn').addEventListener(onclick = my_modal_5.show());
    }



})




// card 3 


document.getElementById('quota-btn').addEventListener('click', function () {
    const inputvalue = parseFloat(document.getElementById('quouta-input').value);
    if (inputvalue <= 0 || mainBlanceEl < inputvalue || isNaN(inputvalue)) {
        alert("Your amount in Invalid");

    }
    else {
        const cardBlan3 = parseFloat(document.getElementById('quota-donet').innerText);
        const sum = donateSum(inputvalue, cardBlan3);
        document.getElementById('quota-donet').innerText = sum;
        const divide = mainBlance(inputvalue, mainBlanceEl);
        document.getElementById('mian-balance').innerText = divide;

        const historyItem = document.createElement('div');
        historyItem.className = 'border-2 p-5 rounded-md w-11/12 mx-auto mb-5'
        historyItem.innerHTML = `
        <h1 class="font-bold text-xl "> <span id="history-balance">96500</span> Aid for Injured in the Quota Movement </h1>
        <p id="date"></p>
        `;
            const historyList = document.getElementById("history-list");
            historyList.insertBefore(historyItem, historyList.firstChild)
            document.getElementById('history-balance').innerText = inputvalue;
            const dates = 'Date : ';
            const currentDate = new Date();
            document.getElementById('date').innerText = dates + currentDate.toString()

            // congratulation interface
            document.getElementById('quouta-input').value = '';
            document.getElementById('quota-btn').addEventListener(onclick = my_modal_5.show());
    
    }
})