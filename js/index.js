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

console.log('robin vai');

// history
const historyBtns = document.getElementById('history-btn')
const donationBtns = document.getElementById('donation-btn');
historyBtns.addEventListener('click',function(){

    historyBtn.classList.add('bg-[#B4F461]')
    donationBtn.classList.remove('bg-[#B4F461]')

    donationBtn.addEventListener('click', function() {
        historyBtn.classList.remove('bg-[#B4F461]')
        donationBtn.classList.add('bg-[#B4F461]')
    }) 


    document.getElementById('card-all').classList.add('hidden')
    // some thing in there
    
})

donationBtns.addEventListener('click',function(){

    donationBtn.classList.add('bg-[#B4F461]')
    historyBtn.classList.remove('bg-[#B4F461]')
    document.getElementById('card-all').classList.remove('hidden')
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

let currentTime = new Date();
const WeekIntext = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const mounthInText = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];


// start on the section

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



        const corruntDay = currentTime.getDay();
        const dayTextR = WeekIntext[corruntDay];

        const monthText = currentTime.getMonth();
        const monthInR = mounthInText[monthText];

        const h1Is = document.getElementById('card-title-1').innerText;
        historyTeextChange.innerHTML += `
        <div class="border rounded-lg">

            
                <h1 class="text-xl font-bold mb-4  px-8 pt-8">${inputvalue1} Taka is Donated for ${h1Is}</h1>
                <p class="text-sm font-light  p-8 pt-0">Date: ${dayTextR} ${monthInR} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} GMT +0600 (Bangladesh Standard Time)</p></div>
    `


        document.getElementById('noakhali-btn').value = '';
        document.getElementById('feni-btn').addEventListener(onclick = my_modal_5.show());





    }


})
console.log('robin');

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


        const corruntDay = currentTime.getDay();
        const dayTextR = WeekIntext[corruntDay];

        const monthText = currentTime.getMonth();
        const monthInR = mounthInText[monthText];

        const h1Is = document.getElementById('card2-tittle').innerText;
        historyTeextChange.innerHTML += `
        <div class="border rounded-lg">

            
                <h1 class="text-xl font-bold mb-4  px-8 pt-8">${inputvalue} Taka is Donated for ${h1Is}</h1>
                <p class="text-sm font-light  p-8 pt-0">Date: ${dayTextR} ${monthInR} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} GMT +0600 (Bangladesh Standard Time)</p></div>
    `

        document.getElementById('feni-input').value = '';

        document.getElementById('feni-btn').addEventListener(onclick = my_modal_4.show());
    }



})