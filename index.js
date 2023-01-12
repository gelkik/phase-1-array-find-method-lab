// code your solution here
const superbowlWin = record => {
    const win = record.find(c =>c.result === 'W')
    if (win != undefined){
        return win['year'];
    }
    else{
        return undefined;
    }
}