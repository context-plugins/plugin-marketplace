import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BillingDetails = {
  /** Billed memory consumption of your workflow, in MB. */
  billedMemoryUsedInMb?: number;
  /** Billed duration of your workflow, in milliseconds. */
  billedDurationInMilliseconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingDetailsSchema: Schema<BillingDetails> = s.object<BillingDetails>(
  {
    billedMemoryUsedInMb: s.optional(s.int()),
    billedDurationInMilliseconds: s.optional(s.int()),
    _keysMap: {
      billedMemoryUsedInMb: "billedMemoryUsedInMB",
    },
  },
  { additionalProperties: s.json() },
);
