import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionStatus5Schema, type TransactionStatus5 } from "./transaction-status5.js";

export type ThreeDSecureScenarioOutcomeAuthentication = {
  /** 3DS transaction status. */
  transactionStatus: TransactionStatus5;
};

export const threeDSecureScenarioOutcomeAuthenticationSchema: Schema<ThreeDSecureScenarioOutcomeAuthentication> =
  s.object<ThreeDSecureScenarioOutcomeAuthentication>({
    transactionStatus: transactionStatus5Schema,
    _keysMap: {
      transactionStatus: "transaction_status",
    },
  });
