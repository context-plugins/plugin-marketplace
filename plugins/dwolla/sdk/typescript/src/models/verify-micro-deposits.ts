import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferAmountSchema, type TransferAmount } from "./transfer-amount.js";

/** Request body for verifying micro-deposits */
export type VerifyMicroDeposits = {
  amount1: TransferAmount;
  amount2: TransferAmount;
};

export const verifyMicroDepositsSchema: Schema<VerifyMicroDeposits> = s.object<VerifyMicroDeposits>({
  amount1: transferAmountSchema,
  amount2: transferAmountSchema,
});
