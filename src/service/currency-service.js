export default class CurrencyExchange {
  static async getCurrency(currencyOne, currencyTwo) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyOne}/${currencyTwo}`
      );
      if (!response.ok) {
        throw Error(response.status);
      }
      return await response.json();
    } catch (error) {
      return error.message;
    }
  }
}