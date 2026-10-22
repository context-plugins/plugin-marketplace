import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullable2Schema, type AmountNullable2 } from "./amount-nullable2.js";
import { amountNullable3Schema, type AmountNullable3 } from "./amount-nullable3.js";
import { amountNullable4Schema, type AmountNullable4 } from "./amount-nullable4.js";
import { amountNullable5Schema, type AmountNullable5 } from "./amount-nullable5.js";

/**
 * A detailed breakdown of the deductions withheld from the movement. Each field represents a
 * specific type of deduction applied to the transaction. Only the applicable fields will be
 * present.
 */
export type DeductionDetails = {
  /** The amount deducted for all transaction fees. */
  fees?: AmountNullable2 | null;
  /** The amount deducted for commissions (e.g Application fees). */
  commissions?: AmountNullable3 | null;
  /** The amount deducted for Mollie Capital repayments. */
  repayments?: AmountNullable4 | null;
  /** The amount deducted for rolling reservations. */
  reservations?: AmountNullable5 | null;
};

export const deductionDetailsSchema: Schema<DeductionDetails> = s.object<DeductionDetails>({
  fees: s.optionalNullable(s.lazy(() => amountNullable2Schema)),
  commissions: s.optionalNullable(s.lazy(() => amountNullable3Schema)),
  repayments: s.optionalNullable(s.lazy(() => amountNullable4Schema)),
  reservations: s.optionalNullable(s.lazy(() => amountNullable5Schema)),
});
