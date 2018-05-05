

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
