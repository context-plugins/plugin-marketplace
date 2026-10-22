import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferAmountSchema, type TransferAmount } from "./transfer-amount.js";

/** Required request body for verifying micro-deposits */
export type VerifyMicroDeposits1 = {
  amount1: TransferAmount;
  amount2: TransferAmount;
};

export const verifyMicroDeposits1Schema: Schema<VerifyMicroDeposits1> = s.object<VerifyMicroDeposits1>({
  amount1: transferAmountSchema,
  amount2: transferAmountSchema,
});
