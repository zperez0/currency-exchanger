import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './service/currency-service';


function clearFields() {
  $(".total").text("");
  $(".amount").text("");
  $(".showErrors").text("");
}

function getElements(response) {
  if () {
    
  } else {

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















