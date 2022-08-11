export const addNumber = (num) => ({
    type: 'Add_Num',
    count: num + 1
})

export const subNumber = (num) => ({
    type: 'Sub_Num',
    count: num - 1
})
