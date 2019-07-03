$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darkskynet.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@darksky"
    }
  ]
});
formatter.before({
  "duration": 12454064858,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Darksky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkskySD.imOnWeb()"
});
formatter.result({
  "duration": 2522286799,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Current Temperature should not be greater or less than the Temperature from Daily Timeline",
  "description": "",
  "id": ";verify-current-temperature-should-not-be-greater-or-less-than-the-temperature-from-daily-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@darksky-2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on the DarkSky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I verify current temp is not greater or less then temps from daily timeline",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.gotoDarkskynet()"
});
formatter.result({
  "duration": 791693223,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.veriFyTemprature()"
});
formatter.result({
  "duration": 597977277,
  "status": "passed"
});
formatter.after({
  "duration": 227873167,
  "status": "passed"
});
});