
function tableTemplate(templateArray){
  var element = templateArray[0];
  var data = templateArray[1];
  var xAxisLabel = templateArray[2];
  var xCat = templateArray[3];

  // Create a table
  var trlength = data.length;
  var tdlength = 4;
  for (var i = 0; i <= trlength; i++) {
    $(element).append("<tr>");
    for (var j = 0; j < tdlength; j++){
      if (i === 0 && j === 0) {
        $(element).append("<td id='xAxis'>" + "<strong>" + xAxisLabel + "</strong>" + "</td>");
      } else if (j === 0) {
        $(element).append("<td></td>");
      } else if (j === 1) {
        $(element).append("<td class='catX'>" + xCat[i] + "</td>");
      } else if (j === 2 & i === trlength){
        $(element).append("<td class='vert'><div id='vertEnd'></div></td>");
      } else if (j === 2){
        $(element).append("<td class='vert'></td>");
      } else if (j === 3 && i === trlength){
        $(element).append("<td id='space'>");
      } else if (j === 3){
        $(element).append("<td id='row" + i.toString() + "'>");
      }
    }
    $(element).append("</tr>");
  }
  $(element).append("</div>");
}

function createBars(data, barColors){
  var lengthArray = [];
  for (var l = 0; l < data.length; l++) {
    var sum = 0;
    for (var k = 0; k < data[l].length; k++) {
      var rowid = "#row" + l.toString();
      $(rowid).append("<div id='" + l.toString() + k.toString() + "'><div class='value'>" + data[l][k] + " </div> </div>");
      var id = "#" + l.toString() + k.toString();
      var barWidth = (data[l][k] * 20).toString() + 'px';
      var num = data[l][k];
      sum = sum + (num * 20);
      var color = barColors[l][k];
      $(id).css({ "width": barWidth, "height": "50px", "background-color": color, "float": "left", "border": "black 0.5px solid" });
    }
    lengthArray.push(sum);
  }
  return lengthArray;
}

function drawBarChart(data,  options,  element) {

  var numValue = data.length;
  var barColors = options.barColors;
  var barSpace = options.barSpace[0];
  var labelColor = options.labelProp[0];
  var labelPos = options.labelProp[1].toLowerCase();
  var title = options.title[0];
  var titleSize = options.title[1];
  var titleColor = options.title[2];
  var yAxisLabel = options.axisLabel[0];
  var xAxisLabel = options.axisLabel[1];
  var xCat = options.xCat;
  var ytickMarks = options.ytickMarks[0];
  xCat.push(".");

  // Page initalization
  $(element).css({"text-align": "center"});
  $(element).append("<h1>" + title + "</h1>");

  // Create basic layout
  $(element).append("<table>");
  var templateArray = [element, data, xAxisLabel, xCat];
  tableTemplate(templateArray);
  var lengthArray = createBars(data,  barColors);
  $(element).append("</table>");

  // Label and axis positioning
  var posArray=[labelPos,numValue,lengthArray];
  var arrayReturn = positioning(posArray);
  var pos = arrayReturn[0];
  var horzLength = arrayReturn[1];
  var totalHeight = arrayReturn[2];
  $(element).append("<h3>" + yAxisLabel + "</h3>");
}

var values = [[10,10,10], [3], [11], [8], [4, 5], [4, 7, 1, 1], [8], [2]];
var options =
{
  barColors: [["red", "yellow","pink","orange","red","lightblue"], ["orange"], ["pink", "yellow"], ["yellow"], ["red", "lightblue"], ["green"], ["black"], ["orange"]],
  barSpace: ["20px"],
  labelProp: ["green", "top"],
  title: ["Y as a function of X", "20px", "red"],
  axisLabel: ["y Axis", "x Axis"],
  xCat: ["Category1", "Category2", "Cat3", "Cat4", "Cat5", "Cat6", "Cat7", "Cat8"],
  ytickMarks:[3]

};
var dom = "#chart";

drawBarChart(values, options, dom);
