export const foodClickIncrement = () => ({
    type: 'FOOD_CLICK_INCREMENT'
});
export const foodClickIncome = () => ({
    type: 'FOOD_CLICK_INCOME'
});
export const foodBuyClick = (incCost = 10, countIncInc=0.1) => ({
    type: 'FOOD_BUYCLICK',
    incCost,
    countIncInc
});
export const foodSellClick = (incCost = 10, countIncInc=0.1) => ({
    type: 'FOOD_SELLCLICK',
    incCost,
    countIncInc
});
export const foodBuyIncome = (incCost = 10, countIncInc=0.1) => ({
    type: 'FOOD_BUYINCOME',
    incCost,
    countIncInc
});
export const foodSellIncome = (incCost = 10, countIncInc=0.1) => ({
    type: 'FOOD_SELLINCOME',
    incCost,
    countIncInc
});
export const foodReset = () => ({
    type: 'FOOD_RESET'
});
