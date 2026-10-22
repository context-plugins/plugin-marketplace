import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  dlocalUpiRecurringInfoOptionsSchema,
  type DlocalUpiRecurringInfoOptions,
} from "../dlocal-upi-recurring-info-options.js";

/** Passes `wallet.recurring_info` to the dLocal API for those connectors that need it. */
export type RecurringInfo = DlocalUpiRecurringInfoOptions;

export const recurringInfoSchema: Schema<RecurringInfo> = s.of<RecurringInfo>(
  s.union([s.lazy(() => dlocalUpiRecurringInfoOptionsSchema)]),
);
