import Market from "./markets.json";

export class Markets {
  static getMarkets() {
    return new Promise((resolve, reject) => {
      if (Market) {
        resolve(Market);
      } else {
        reject();
      }
    });
  }
}