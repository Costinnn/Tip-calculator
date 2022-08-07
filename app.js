const bill = document.querySelector('[data-bill]');
const tip5 = document.querySelector('[data-5]');
const tip10 = document.querySelector('[data-10]');
const tip15 = document.querySelector('[data-15]');
const tip25 = document.querySelector('[data-25]');
const tip50 = document.querySelector('[data-50]');
const custom = document.querySelector('[data-custom]');
const people = document.querySelector('[data-people]');
const perPerson = document.querySelector('[data-perPerson]');
const total = document.querySelector('[data-total]');
const equal = document.querySelector('[data-equal]');
const reset = document.querySelector('[data-reset]');
let tipOn = false;
let tip = 0;
let customOn = false;
people.value = 1;

tip5.addEventListener('click', () => {
    if (tipOn) {
        tip10.style.borderStyle = 'none';
        tip15.style.borderStyle = 'none';
        tip25.style.borderStyle = 'none';
        tip50.style.borderStyle = 'none';
        custom.style.borderStyle = 'none';
    }
    tip5.style.borderStyle = 'solid';
    tip5.style.borderColor = 'hsl(172, 67%, 45%)';
    tipOn = true;
    customOn = false;
    tip = 0.05;

})

tip10.addEventListener('click', () => {
    if (tipOn) {
        tip5.style.borderStyle = 'none';
        tip15.style.borderStyle = 'none';
        tip25.style.borderStyle = 'none';
        tip50.style.borderStyle = 'none';
        custom.style.borderStyle = 'none';
    }
    tip10.style.borderStyle = 'solid';
    tip10.style.borderColor = 'hsl(172, 67%, 45%)';
    tipOn = true;
    customOn = false;
    tip = 0.1;
})

tip15.addEventListener('click', () => {
    if (tipOn) {
        tip5.style.borderStyle = 'none';
        tip10.style.borderStyle = 'none';
        tip25.style.borderStyle = 'none';
        tip50.style.borderStyle = 'none';
        custom.style.borderStyle = 'none';
    }
    tip15.style.borderStyle = 'solid';
    tip15.style.borderColor = 'hsl(172, 67%, 45%)';
    tipOn = true;
    customOn = false;
    tip = 0.15;
})

tip25.addEventListener('click', () => {
    if (tipOn) {
        tip5.style.borderStyle = 'none';
        tip10.style.borderStyle = 'none';
        tip15.style.borderStyle = 'none';
        tip50.style.borderStyle = 'none';
        custom.style.borderStyle = 'none';
    }
    tip25.style.borderStyle = 'solid';
    tip25.style.borderColor = 'hsl(172, 67%, 45%)';
    tipOn = true;
    customOn = false;
    tip = 0.25;
})

tip50.addEventListener('click', () => {
    if (tipOn) {
        tip5.style.borderStyle = 'none';
        tip10.style.borderStyle = 'none';
        tip15.style.borderStyle = 'none';
        tip25.style.borderStyle = 'none';
        custom.style.borderStyle = 'none';
    }
    tip50.style.borderStyle = 'solid';
    tip50.style.borderColor = 'hsl(172, 67%, 45%)';
    tipOn = true;
    customOn = false;
    tip = 0.5;
})

custom.addEventListener('click', () => {
    if (tipOn) {
        tip5.style.borderStyle = 'none';
        tip10.style.borderStyle = 'none';
        tip15.style.borderStyle = 'none';
        tip25.style.borderStyle = 'none';
        tip50.style.borderStyle = 'none';
    }
    custom.style.borderStyle = 'solid';
    custom.style.borderColor = 'hsl(172, 67%, 45%)';
    tipOn = true;
    customOn = true;
})

equal.addEventListener('click', () => {

    bill.style.borderStyle = 'none';
    people.style.borderStyle = 'none';

    let billString = bill.value;
    let peopleString = people.value;
    let dots = 0;

    for (let i = 0; i < billString.length; i++) {

        let code = billString.charCodeAt(i);
        if (code < 48 || code > 57) {

            if (code == 46) {
                dots++;
                if (dots > 1) {
                    bill.style.borderStyle = 'solid';
                    bill.style.borderColor = 'red';
                    perPerson.innerHTML = 'Error';
                    total.innerHTML = 'Error';
                    return;
                }
            } else if (code !== 46) {
                bill.style.borderStyle = 'solid';
                bill.style.borderColor = 'red';
                perPerson.innerHTML = 'Error'
                total.innerHTML = 'Error';
                return;
            }


        }
    }

    for (let i = 0; i < peopleString.length; i++) {

        code = peopleString.charCodeAt(i);

        if (code < 49 || code > 57) {
            people.style.borderStyle = 'solid';
            people.style.borderColor = 'red';
            perPerson.innerHTML = 'Error';
            total.innerHTML = 'Error';
            return;
        }


    }

    let billValue = parseFloat(bill.value);
    let numberOfPeople = parseFloat(people.value);

    if (customOn) {
        let customValue = parseFloat(custom.value) / 100;
        perPerson.innerHTML = ((billValue * customValue) / numberOfPeople).toFixed(2);
        total.innerHTML = (billValue + billValue * customValue).toFixed(2);
    } else {
        perPerson.innerHTML = ((billValue * tip) / numberOfPeople).toFixed(2);
        total.innerHTML = (billValue + billValue * tip).toFixed(2);
    }



})

reset.addEventListener('click', () => {
    bill.value = '';
    bill.style.borderStyle = 'none';
    people.value = 1;
    custom.value = 'Custom';
    people.style.borderStyle = 'none';
    perPerson.innerHTML = '0.00';
    total.innerHTML = '0.00';
    tip5.style.borderStyle = 'none';
    tip10.style.borderStyle = 'none';
    tip15.style.borderStyle = 'none';
    tip25.style.borderStyle = 'none';
    tip50.style.borderStyle = 'none';
    custom.style.borderStyle = 'none';
})


