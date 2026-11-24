import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";

/** Payment purpose response. */
export type PaymentPurposeResponse = {
  /** Payment purpose text */
  text?: string;
  code?: Code1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentPurposeResponseSchema: Schema<PaymentPurposeResponse> = s.object<PaymentPurposeResponse>(
  {
    text: s.optional(s.string()),
    code: s.optional(s.lazy(() => code1Schema)),
  },
  { additionalProperties: s.json() },
);
