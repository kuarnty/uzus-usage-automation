const mongoose = require('mongoose');
const User = require('./user');

main().catch(err => console.log(err));

async function main() {
    mongoose.connect("", {
        dbName: 'maindb',
    }, (err) => {
        if (err) {
            console.log("DB Connection Fail!");
        }
        else {
            console.log("DB Connection Success!");
        }
    });

    const data = await User.find({});

    var startThreshold = Date.parse('2022-09-30');
    var endThreshold = Date.parse('2022-10-05');

    var totalCount = data.length;
    var thisMonthCount = 0;

    data.forEach((item, index) => {
        //console.log(item.toString());
        var date = Date.parse(item.get('time'));
        if (startThreshold <= date && date <= endThreshold) {
            //console.log("found!");
            thisMonthCount++;
        }
    });

    console.log('total document #: ' + totalCount);
    console.log('this month document #: ' + thisMonthCount);

    return;
}