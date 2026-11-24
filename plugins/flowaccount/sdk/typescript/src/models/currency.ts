import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = USD 3 = GBP 5 = EUR 7 = JPY 9 = HKD 11 = CNY 13 = THB 15 = AUD 33 = BDT 35 = BHD 37 = BND 39
 * = KHR 41 = CAD 43 = DKK 45 = INR 47 = IDR 49 = ILS 53 = KRW 55 = LAK 57 = MOP 59 = MYR 61 = MMK
 * 63 = NPR 65 = NZD 67 = NOK 69 = OMR 71 = PKR 73 = PHP 75 = QAR 77 = RUB 79 = SAR 81 = SEK 83 =
 * SGD 85 = LKR 87 = CHF 89 = TWD 91 = AED 93 = VND 95 = ZAR 97 = MXN 99 = KWD 101 = CZK 103 = KES
 * 105 = EGP 107 = PLN 109 = IQD 111 = JOD 113 = MVR 115 = PGK 117 = HUF
 */
export const Currency = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
  _15: 15,
  _33: 33,
  _35: 35,
  _37: 37,
  _39: 39,
  _41: 41,
  _43: 43,
  _45: 45,
  _47: 47,
  _49: 49,
  _53: 53,
  _55: 55,
  _57: 57,
  _59: 59,
  _61: 61,
  _63: 63,
  _65: 65,
  _67: 67,
  _69: 69,
  _71: 71,
  _73: 73,
  _75: 75,
  _77: 77,
  _79: 79,
  _81: 81,
  _83: 83,
  _85: 85,
  _87: 87,
  _89: 89,
  _91: 91,
  _93: 93,
  _95: 95,
  _97: 97,
  _99: 99,
  _101: 101,
  _103: 103,
  _105: 105,
  _107: 107,
  _109: 109,
  _111: 111,
  _113: 113,
  _115: 115,
  _117: 117,
} as const;
export type Currency = (typeof Currency)[keyof typeof Currency] | (number & {});

export const currencySchema: EnumSchema<Currency> = s.enumOf<Currency>(Currency);
