const ExcelJS = require('exceljs');

async function main() {
    var workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./UzusDBTest/uzus.xlsx');
    //await workbook.xlsx.writeFile("./UzusDBTest/uzusDBWriteTest(10.07).xlsx");
    // const dataSheet = workbook.worksheets[1];

    // dataSheet.getCell('A2').value = thisMonthCount;
    // dataSheet.getCell('A4').value = totalCount;

    await workbook.xlsx.writeFile("./UzusDBTest/uzusDBWriteTest(10.07).xlsx");
    console.log('workbook wrote.');
    // await workbook.commit();
}