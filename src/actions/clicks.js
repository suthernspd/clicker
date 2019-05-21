export const clickIncrement = () => ({
    type: 'CLICK_INCREMENT'
});
export const clickIncome = () => ({
    type: 'CLICK_INCOME'
});
export const buyClick = (incCost = 10, countIncInc=0.1) => ({
    type: 'BUYCLICK',
    incCost,
    countIncInc
});
export const sellClick = (incCost = 10, countIncInc=0.1) => ({
    type: 'SELLCLICK',
    incCost,
    countIncInc
});
export const buyIncome = (incCost = 10, countIncInc=0.1) => ({
    type: 'BUYINCOME',
    incCost,
    countIncInc
});
export const sellIncome = (incCost = 10, countIncInc=0.1) => ({
    type: 'SELLINCOME',
    incCost,
    countIncInc
});
export const reset = () => ({
    type: 'RESET'
});
