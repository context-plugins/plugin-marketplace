import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentRequired1 = {
  /** Human-readable error message. */
  msg: string;
  /**
   * Seconds until the trial daily cap resets (next UTC midnight). Present only for the temporary
   * trial-cap case.
   */
  retryAfter?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentRequired1Schema: Schema<PaymentRequired1> = s.object<PaymentRequired1>(
  {
    msg: s.string(),
    retryAfter: s.optional(s.int()),
    _keysMap: {
      retryAfter: "retry_after",
    },
  },
  { additionalProperties: s.json() },
);
