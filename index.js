// code your solution here
const superbowlWin = recordArray => {
    const win = recordArray.find(obj => obj.result === "W")
    return win !== undefined?win.year:undefined;
};