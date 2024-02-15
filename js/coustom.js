let number = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');
for (let index = 0; index < cards.length; index++){
    const card = cards[index];
    const addButton = card.querySelector('.add-card');
    addButton.addEventListener('click', function () {
        const cardTitle = card.querySelector('h2').innerText;
        const titleContainer = document.getElementById('title-container')
        const p = document.createElement('p');
        p.innerText = number + '. ' + cardTitle;
        titleContainer.appendChild(p);
        number++;
        const price = parseFloat(card.querySelector('p').innerText.split(' ')[1])
    //    total price cound
    totalPrice += price;
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    })
};
const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    const couponInputField = document.getElementById('input-field')
    const getCouponInput = couponInputField.value;
    const getCoupon = getCouponInput.split(' ').join('').toUpperCase();
    if(totalPrice >= 200){
        if(getCoupon === 'SELL200'){
            const discountPriceId = document.getElementById('discountPrice');
            const discountPrice = totalPrice * 0.2;
            discountPriceId.innerText = discountPrice;
            const totalId = document.getElementById('total');
            const total = totalPrice - discountPrice;
            totalId.innerText = total.toFixed(2);
        }
        else{
            alert('Invalid coupon code.')
        }
    }
    else{
        alert('please Purchase up to 200')
    }
})