// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(a="go to the office") {
    return `This Monday, I will ${a}.`
}

function wrapAdjective(x="*") {
    return function(n = "special") {
        return `You are ${x}${n}${x}!`
    }    
}