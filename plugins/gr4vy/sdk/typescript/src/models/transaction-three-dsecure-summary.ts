import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount8Schema, type Amount8 } from "./unions/amount8.js";
import { errorDataSchema, type ErrorData } from "./unions/error-data.js";
import { method25Schema, type Method25 } from "./unions/method25.js";
import { responseDataSchema, type ResponseData } from "./unions/response-data.js";
import { statusSchema, type Status } from "./unions/status.js";
import { version1Schema, type Version1 } from "./unions/version1.js";

export type TransactionThreeDSecureSummary = {
  /** The version of 3DS used for this transaction. */
  version?: Version1;
  /** The status of the 3DS challenge for this transaction. */
  status?: Status;
  /** The method used for 3DS authentication for this transaction. */
  method?: Method25;
  /**
   * The 3DS data used for this transaction. To see full details about the 3DS calls please use our
   * transaction events API.
   */
  responseData?: ResponseData;
  /**
   * The error data received from our 3DS server. This will not be populated if the customer failed
   * the authentication with a status code of `N`, `R`, or `U`. To see full details about the 3DS
   * calls in those situations please use our transaction events API.
   */
  errorData?: ErrorData;
  /** The amount used for 3DS authentication. */
  amount?: Amount8;
};

export const transactionThreeDSecureSummarySchema: Schema<TransactionThreeDSecureSummary> =
  s.object<TransactionThreeDSecureSummary>({
    version: s.optional(s.lazy(() => version1Schema)),
    status: s.optional(s.lazy(() => statusSchema)),
    method: s.optional(s.lazy(() => method25Schema)),
    responseData: s.optional(s.lazy(() => responseDataSchema)),
    errorData: s.optional(s.lazy(() => errorDataSchema)),
    amount: s.optional(s.lazy(() => amount8Schema)),
    _keysMap: {
      responseData: "response_data",
      errorData: "error_data",
    },
  });
