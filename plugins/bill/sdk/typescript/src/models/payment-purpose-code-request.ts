import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Payment purpose code request. */
export type PaymentPurposeCodeRequest = {
  /** Name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentPurposeCodeRequestSchema: Schema<PaymentPurposeCodeRequest> =
  s.object<PaymentPurposeCodeRequest>(
    {
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
