// ตัวอย่างการดึงข้อมูลจาก Google Sheets ผ่าน Google Visualization API
function init() {
  var queryString = encodeURIComponent('SELECT A, B, C WHERE D="Question"');
  var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString);
  
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  
  var data = response.getDataTable();
  // ดึงข้อมูลคำถามและตัวเลือก
  console.log(data);
  // ใช้ข้อมูลเหล่านี้ในการแสดงข้อสอบ
}

google.load("visualization", "1", {
  packages: ["corechart", "table"],
  callback: init
});
