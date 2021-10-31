function assignId(array) {
    let highest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id >= highest) {
            highest = array[i].id;
        }
    }
    return highest+1;
    }
    module.exports = assignId;