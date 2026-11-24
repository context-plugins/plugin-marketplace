import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Payment purpose code response. */
export type PaymentPurposeCodeResponse = {
  /** Name */
  name?: string;
  /** Value */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentPurposeCodeResponseSchema: Schema<PaymentPurposeCodeResponse> =
  s.object<PaymentPurposeCodeResponse>(
    {
      name: s.optional(s.string()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
