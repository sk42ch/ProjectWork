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
  "duration": 9658238062,
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
  "duration": 3879895273,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid signup error message",
  "description": "",
  "id": ";verify-invalid-signup-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@darksky-1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the darksky Register page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify im still on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.registerPage()"
});
formatter.result({
  "duration": 1178435302,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.registerButtonPage()"
});
formatter.result({
  "duration": 90827287,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.registerPageverifiy()"
});
formatter.result({
  "duration": 11642214,
  "status": "passed"
});
formatter.after({
  "duration": 362255433,
  "status": "passed"
});
formatter.before({
  "duration": 7136204503,
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
  "duration": 2309956792,
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
  "duration": 1015013751,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.veriFyTemprature()"
});
formatter.result({
  "duration": 693358640,
  "status": "passed"
});
formatter.after({
  "duration": 175372000,
  "status": "passed"
});
formatter.before({
  "duration": 5074125725,
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
  "duration": 2292977929,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": ";verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@darksky-3"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on the DarkSky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I expand todays timeline",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.gotoDarkskynet()"
});
formatter.result({
  "duration": 1341078263,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.expendTodayTimeline()"
});
formatter.result({
  "duration": 8482476450,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.displayedTempreture()"
});
formatter.result({
  "duration": 219051007,
  "status": "passed"
});
formatter.after({
  "duration": 177979348,
  "status": "passed"
});
formatter.before({
  "duration": 5660679214,
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
  "duration": 2974351730,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify timline is displayed in correct format",
  "description": "",
  "id": ";verify-timline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@darksky-4"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the DarkSky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.gotoDarkskynet()"
});
formatter.result({
  "duration": 1140521999,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.incrementHours()"
});
formatter.result({
  "duration": 688196611,
  "status": "passed"
});
formatter.after({
  "duration": 246335199,
  "status": "passed"
});
});