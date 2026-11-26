import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The type CustomerBalance dto. */
export type CustomerBalance = {
  amount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerBalanceSchema: Schema<CustomerBalance> = s.object<CustomerBalance>(
  {
    amount: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
