import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User provided options for processing the recurring payment. */
export type RecurringBillProcessingOptions = {
  /** Set as `true` to enable auto-payment for each bill */
  autoPayment?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recurringBillProcessingOptionsSchema: Schema<RecurringBillProcessingOptions> =
  s.object<RecurringBillProcessingOptions>(
    {
      autoPayment: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
