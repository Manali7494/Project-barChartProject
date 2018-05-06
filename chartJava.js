
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

function positioning (posArray){
  var labelPos = posArray[0];
  var numValue = posArray[1];
  var lengthArray = posArray[2];

  // Label position
  var pos;

  if (labelPos === "top") {
    pos = "10%";
  } else if (labelPos === "middle"){
    pos = "100%";
  } else if (labelPos === "bottom"){
    pos = "200%";
  }

  // Calculating height of x Axis
  var totalHeight = (20 * numValue);
  totalHeight = "-" + (totalHeight) + "px";

  // Calculating y ticks:
  var maxLength = Math.max.apply(null, lengthArray);
  var str = "";
  var strLength = Math.ceil(maxLength / 17);
  var num = 0;
  for (var i = 0; i < (strLength); i++) {
    str += "|";
  }
  $("#space").html(str);
  var horzLength = (maxLength + (20 * 9)).toString() + "px";
  $("#space").append("<div id='horz'></div>");
  var arrayReturn = [pos, horzLength,  totalHeight];
  return arrayReturn;
}

function cssStyle(styleArray){
  var barSpace = styleArray[0];
  var pos = styleArray[1];
  var labelColor = styleArray[2];
  var horzLength = styleArray[3];
  var titleColor = styleArray[4];
  var titleSize = styleArray[5];
  var totalHeight = styleArray[6];

  $("table").css({"margin-left": "auto", "margin-right": "auto", "border": "black solid 1px"});
  $("td").css({"height": "15px", "padding": "0px", "padding-bottom": barSpace, "padding-top": "0px"});
  $(".vert").css({"background-color": "black", "width": "5px"});
  $(".value").css({"transform": "translateY(" + pos + ")", "color": labelColor});
  $("#horz").css({"width": horzLength, "height": "5px", "background-color": "black", "transform": "translateY(0%)", "margin": "0px", "padding": "0px"});
  $("#space").css({"letter-spacing": "17px", "margin-left": "0px", "padding": "0px", "text-align": "left"});
  $("#vertEnd").css({"height": "45px", "transform": "translateY(120%)", "width": "8px", "background-color": "white", "border": "white solid 1px"});
  $("h1").css({"color": titleColor, "font-size": titleSize, "transform": "translateX(-25%)"});
  $(".catX").css({"transform": "translateY(-40%)"});
  $("#xAxis").css({"transform": "rotate(270deg) translateX(" + totalHeight + ")", "font-size": "20px", "padding-right": "50px"});
  $("h3").css({"transform": "translateX(-25%)"});
}

// Main Function
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
  xCat.push(".");

  // Page initalization
  $(element).fadeToggle(0);
  $(element).fadeToggle(4000);
  $(element).css({"text-align": "center"});
  $(element).append("<h1>" + title + "</h1>");
  // Create basic layout
  $(element).append("<table>");
  var templateArray = [element, data, xAxisLabel, xCat];
  tableTemplate(templateArray);
  var lengthArray = createBars(data,  barColors);
  $(element).append("</table>");

  // Label and axis positioning
  var posArray = [labelPos, numValue, lengthArray];
  var arrayReturn = positioning(posArray);
  var pos = arrayReturn[0];
  var horzLength = arrayReturn[1];
  var totalHeight = arrayReturn[2];
  $(element).append("<h3>" + yAxisLabel + "</h3>");

  // CSS Styles
  var cssStyleArray = [barSpace, pos, labelColor, horzLength, titleColor, titleSize, totalHeight];
  cssStyle(cssStyleArray);
}