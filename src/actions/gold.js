export const goldClickIncrement = () => ({
    type: 'GOLD_CLICK_INCREMENT'
});
export const goldClickIncome = () => ({
    type: 'GOLD_CLICK_INCOME'
});
export const goldBuyClick = (incCost = 10, countIncInc=0.1) => ({
    type: 'GOLD_BUYCLICK',
    incCost,
    countIncInc
});
export const goldSellClick = (incCost = 10, countIncInc=0.1) => ({
    type: 'GOLD_SELLCLICK',
    incCost,
    countIncInc
});
export const goldBuyIncome = (incCost = 10, countIncInc=0.1) => ({
    type: 'GOLD_BUYINCOME',
    incCost,
    countIncInc
});
export const goldSellIncome = (incCost = 10, countIncInc=0.1) => ({
    type: 'GOLD_SELLINCOME',
    incCost,
    countIncInc
});
export const goldReset = () => ({
    type: 'GOLD_RESET'
});
