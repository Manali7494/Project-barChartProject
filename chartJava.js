
function tableTemplate(templateArray){
  var element = templateArray[0];
  var data = templateArray[1];
  var xAxisLabel = templateArray[2];
  var xCat = templateArray[3];
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
