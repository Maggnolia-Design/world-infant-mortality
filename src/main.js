// Page title
d3.select("body").append("h3").text("This is My Title");

// Loading data
d3.csv("global-infant-mortality.csv", d3.autoType).then(function (data) {
  console.log(data[0]);

  d3.select("body")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", function (d) {
      return d.amount * 40 + "px";
    })
    .style("height", "15px");
});
