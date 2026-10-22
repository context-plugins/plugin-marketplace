import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  adyenPixRecurringAmountSchema,
  type AdyenPixRecurringAmount,
} from "../adyen-pix-recurring-amount.js";

/**
 * For a billing plan where the payment amount is fixed, the currency and value for each recurring
 * payment
 */
export type RecurringAmount = AdyenPixRecurringAmount;

export const recurringAmountSchema: Schema<RecurringAmount> = s.of<RecurringAmount>(
  s.union([s.lazy(() => adyenPixRecurringAmountSchema)]),
);
