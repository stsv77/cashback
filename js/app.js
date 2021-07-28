'use strict';

function calculateCashback(specialCategoryPurchases, otherCategoryPurchases) {
    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;

    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    const totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 10000;

    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };
}

function handleSubmit(evt){
    evt.preventDefault();

    const specialAmountErrorEl = document.getElementById('special-amount-error');
    const otherAmountErrorEl = document.getElementById('other-amount-error');
    const specialCashbackEl = document.getElementById('special-cashback');
    const otherCashbackEl = document.getElementById('other-cashback');
    const totalCashbackEl = document.getElementById('total-cashback');

    specialAmountErrorEl.textContent = '';
    otherAmountErrorEl.textContent = '';
    specialCashbackEl.textContent = '';
    otherCashbackEl.textContent = '';
    totalCashbackEl.textContent = '';

    const specialAmountInputEl = document.getElementById('special-amount-input');
    const specialAmount = Number(specialAmountInputEl.value);
    if (Number.isNaN(specialAmount)){
        specialAmountErrorEl.textContent = 'Неверное значение. Введите число, например: 10000';
        return;
    }
    if (!Number.isFinite(specialAmount)){
        specialAmountErrorEl.textContent = 'Слишком большое число. Введите число, например: 10000';
        return;

    }
    const otherAmountInputEl = document.getElementById('other-amount-input');
    const otherAmount = Number(otherAmountInputEl.value);
    if (Number.isNaN(otherAmount)){
        otherAmountErrorEl.textContent = 'Неверное значение. Введите число, например: 10000';
        return;
    }
    if (!Number.isFinite(otherAmount)){
        otherAmountErrorEl.textContent = 'Слишком большое число. Введите число, например: 10000';
        return;
    }

    const result = calculateCashback(specialAmount, otherAmount);
    specialCashbackEl.textContent = `${result.specialCategoryCashback} руб.`;
    otherCashbackEl.textContent = `${result.otherCategoryCashback} руб.`;
    totalCashbackEl.textContent = `${result.totalCashback} руб.`;
}

const formEl = document.getElementById('cashback-form');
formEl.onsubmit = handleSubmit;

//const cashback = calculateCashback;
//console.log(cashback(10000, 15000));