export const woodClickIncrement = () => ({
    type: 'WOOD_CLICK_INCREMENT'
});
export const woodClickIncome = () => ({
    type: 'WOOD_CLICK_INCOME'
});
export const woodBuyClick = (incCost = 10, countIncInc=0.1) => ({
    type: 'WOOD_BUYCLICK',
    incCost,
    countIncInc
});
export const woodSellClick = (incCost = 10, countIncInc=0.1) => ({
    type: 'WOOD_SELLCLICK',
    incCost,
    countIncInc
});
export const woodBuyIncome = (incCost = 10, countIncInc=0.1) => ({
    type: 'WOOD_BUYINCOME',
    incCost,
    countIncInc
});
export const woodSellIncome = (incCost = 10, countIncInc=0.1) => ({
    type: 'WOOD_SELLINCOME',
    incCost,
    countIncInc
});
export const woodReset = () => ({
    type: 'WOOD_RESET'
});
