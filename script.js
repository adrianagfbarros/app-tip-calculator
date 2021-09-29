/*
const tipAmount = document.querySelector('.tip-amount');
const totalPerPerson = document.querySelector('.total-per-person');
const tipPercent = document.getElementsByClassName('tip-percentage');
const tipBill = document.getElementById('tipBill');
const numPeople = document.getElementById('num-people');

for ( let i = 0; i < tipPercent.length; i++) {
    tipPercent[i].value.addEventListener('click', () => {
        let y = tipBill * tipPercent[i]
    })
}

numPeople.addEventListener('click', () => {
  if (tipBill.value != 0) {
    (tipBill.value + y)/numPeople.value = totalPerPerson.value
    return totalPerPerson;
  }
});
*/
const tipBill = document.getElementById('tipBill').value
const BILL = tipBill.addEventListener('blur', () => {
    if (tipBill != 0) {
        tipBill = document.getElementById('total-per-person').value;
    }
})
