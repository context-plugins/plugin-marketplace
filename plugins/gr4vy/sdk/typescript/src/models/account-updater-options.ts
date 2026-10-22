import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountNumber5Schema, type AccountNumber5 } from "./unions/account-number5.js";
import { errorCode2Schema, type ErrorCode2 } from "./unions/error-code2.js";
import { expirationMonthSchema, type ExpirationMonth } from "./unions/expiration-month.js";
import { expirationYearSchema, type ExpirationYear } from "./unions/expiration-year.js";
import { responseCode1Schema, type ResponseCode1 } from "./unions/response-code1.js";

export type AccountUpdaterOptions = {
  /** The type of response to simulate. */
  responseCode?: ResponseCode1;
  /**
   * When the `response_code` is set to `updated`, the payment method's account number will be
   * updated to this value.
   */
  accountNumber?: AccountNumber5;
  /**
   * When the `response_code` is set to `updated`, the payment method's expiration month will be
   * updated to this value.
   */
  expirationMonth?: ExpirationMonth;
  /**
   * When the `response_code` is set to `updated`, the payment method's expiration year will be
   * updated to this value.
   */
  expirationYear?: ExpirationYear;
  /** The type of error code to simulate. */
  errorCode?: ErrorCode2;
};

export const accountUpdaterOptionsSchema: Schema<AccountUpdaterOptions> = s.object<AccountUpdaterOptions>({
  responseCode: s.optional(s.lazy(() => responseCode1Schema)),
  accountNumber: s.optional(s.lazy(() => accountNumber5Schema)),
  expirationMonth: s.optional(s.lazy(() => expirationMonthSchema)),
  expirationYear: s.optional(s.lazy(() => expirationYearSchema)),
  errorCode: s.optional(s.lazy(() => errorCode2Schema)),
  _keysMap: {
    responseCode: "response_code",
    accountNumber: "account_number",
    expirationMonth: "expiration_month",
    expirationYear: "expiration_year",
    errorCode: "error_code",
  },
});
