import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionStatus1Schema, type TransactionStatus1 } from "./transaction-status1.js";

export type ThreeDSecureScenarioOutcomeResult = {
  /** 3DS result. */
  transactionStatus: TransactionStatus1;
};

export const threeDSecureScenarioOutcomeResultSchema: Schema<ThreeDSecureScenarioOutcomeResult> =
  s.object<ThreeDSecureScenarioOutcomeResult>({
    transactionStatus: transactionStatus1Schema,
    _keysMap: {
      transactionStatus: "transaction_status",
    },
  });
