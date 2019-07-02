// Generated by CoffeeScript 1.12.6
(function() {
  "use strict";
  // Helper for generate C3.js graphs
  //----------------------------------------------------------------------
  var buildGraph;

  buildGraph = function(el) {
    var conf, url;
    url = $(el).data("graph");
    conf = {
      bindto: el,
      data: {
        x: "x",
        url: url,
        mimeType: "json"
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d"
          }
        }
      }
    };
    return c3.generate(conf);
  };

  App.Stats = {
    initialize: function() {
      return $("[data-graph]").each(function() {
        return buildGraph(this);
      });
    }
  };

}).call(this);
