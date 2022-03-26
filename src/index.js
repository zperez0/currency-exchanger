import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "./service/currency-service";

function clearFields() {
  $(".total").text("");
  $(".amount").text("");
  $(".showErrors").text("");
}

function getElements(response) {
  if (response.result === "success" && response.conversion_rate) {
    let rate = response.conversion_rate;
    let amount = $("#amount").val();
    $(".total").text(` Total: ${rate * amount} ${response.target_code}`);
  } else {
    $(".total").text("Error");
    $(".showErrors").text(
      `Sorry, Space Cowboy due to a ${response} error. We were unable to process your information. Try choosing another currency or checking your API Key.`
    );
  }
}

async function makeApiCall(currencyOne, currencyTwo) {
  const response = await CurrencyExchange.getCurrency(currencyOne, currencyTwo);
  getElements(response);
}

$(document).ready(function () {
  $("#convertButton").click(function () {
    let currencyOne = $("#currencyOne").val();
    let currencyTwo = $("#currencyTwo").val();
    clearFields();
    makeApiCall(currencyOne, currencyTwo);
  });
});
