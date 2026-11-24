import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type PaymentPurpose = {
  /**
   * Payment purpose text. This can be any user-defined text. If you set `text`, do not set `code`.
   */
  text?: string;
  code?: Code;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentPurposeProperties: s.Shape<PaymentPurpose> = {
  text: s.optional(s.string()),
  code: s.optional(s.lazy(() => codeSchema)),
};

export const paymentPurposeInternalSchema: Schema<PaymentPurpose> = s.object<PaymentPurpose>(
  paymentPurposeProperties,
  { additionalProperties: s.json() },
);

export const paymentPurposeSchema: Schema<PaymentPurpose> = s.lazySchema(() =>
  s.object<PaymentPurpose>(
    {
      ...paymentPurposeProperties,
      text: s.optional(s.string().check(s.maxLength(250))),
    },
    { additionalProperties: s.json() },
  ),
);
