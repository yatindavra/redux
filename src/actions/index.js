export const incNum = (num)=>{
    return {type: "increment",payload:num}
}
export const decNum = (num)=>{
    return {type: "decrement",payload:num}
}