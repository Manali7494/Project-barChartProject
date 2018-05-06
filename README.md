# barChartProject
Extra Project Prep

##1. About
The goal of the project is to make a simple horizontal bar chart with single and multiple stacked values. Since the requirement was simple, it was created without using cvs or canvas. It was created only by using javascript, css, and jquery.

##2. Example Screenshots

##3. API function
The main API function that the user will use is the drawBarChart function. It takes in 3 parameters:

 1. Data which is a set of nested arrays with numerical values
Example:  ```var values = [[1], [2, 3], [4,5,6]]```
 2. Options which is an object with arrays as key:value pairs
 The options parameter takes in 6 keys in the object and has corresponding arrays.
  1. barColors: Nested array that follows the corresponding values array
  2. barSpace: A single array value indicating the space in px between bars
  3. labelProp: An array with two values. The first will be the color of the labels and the second is the position of the label. The options are "top", "middle", and "bottom"
  4. title: Takes in 3 values. The first is the title of the chart, second is the size of the chart, and the third is the color of the title
  5. axisLabel: Takes in 2 values in an array. the first value is the title of the y axis and the second value is the title of x Axis
  6. xCat: An array with values with corresponding x Values.

Example:

    options = {
    barColors:[ ["red"], ["orange", "blue"], ["lightblue", "pink", "lightgray"] ]
    BarSpace:["10px"]
    labelProp:["black", "middle"],
    title: ["Y as a function of X", "20px", "red"]
    axisLabel: ["y Axis","x Axis"],
    xCat: ["Category 1","Category 2", "Category 3"]
    }


 3. DOM element object indicated with its corresponding symbol of "#" or "." if it is a id or class.
 Example:
 ```var dom = "#chart";```


##4. Feature List
The list of features it supports are as follows:

* Single and multiple values
* Individual Bar Colors (single and multi-values)
* Spacing of the horizontal bars
* Color of individual labels
* Position of the labels (ie top, middle or bottom)
* Title with the ability to change size and color
* Labels for x Values

##5. Known Issues/Bugs
To maintain proper layout of the graph, there are few limitations of the graph. If the limit is exceeded, values of bars will be displayed properly. However, the appearance of the x and y axis will be compromised.

* Horizontal stacked value is limited to a 50 for each category.
 * If limit is exceeded, the y tick values extend longer than the y axis
* Bar spacing with a maximum of 50 px
 * If limit is exceeded, the x axis will be extended near the end of the graph
##6. Future features

##7. External Resources

