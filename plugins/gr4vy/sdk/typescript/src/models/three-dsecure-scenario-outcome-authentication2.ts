import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionStatus5Schema, type TransactionStatus5 } from "./transaction-status5.js";

/** 3DS authentication value. */
export type ThreeDSecureScenarioOutcomeAuthentication2 = {
  /** 3DS transaction status. */
  transactionStatus: TransactionStatus5;
};

export const threeDSecureScenarioOutcomeAuthentication2Schema: Schema<ThreeDSecureScenarioOutcomeAuthentication2> =
  s.object<ThreeDSecureScenarioOutcomeAuthentication2>({
    transactionStatus: transactionStatus5Schema,
    _keysMap: {
      transactionStatus: "transaction_status",
    },
  });
