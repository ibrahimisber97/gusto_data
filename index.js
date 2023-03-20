const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

const excelToJson = require('convert-excel-to-json');
 var cors = require('cors')
 app.use(cors())
const result = excelToJson({
    sourceFile: 'excel/menu.xlsx',
    
    columnToKey: {
        A: 'name',
        B: 'price',
        C: 'description',
        D: 'currency',
        E: 'img',
    }

});


app.get('/', function (req, res) {
  res.send(result)
})
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});