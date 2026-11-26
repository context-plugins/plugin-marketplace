import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

/** Payment purpose request. */
export type PaymentPurposeRequest = {
  /**
   * Payment purpose text. This can be any user-defined text. If you set `text`, do not set `code`.
   */
  text?: string;
  code?: Code;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentPurposeRequestProperties: s.Shape<PaymentPurposeRequest> = {
  text: s.optional(s.string()),
  code: s.optional(s.lazy(() => codeSchema)),
};

export const paymentPurposeRequestInternalSchema: Schema<PaymentPurposeRequest> =
  s.object<PaymentPurposeRequest>(paymentPurposeRequestProperties, { additionalProperties: s.json() });

export const paymentPurposeRequestSchema: Schema<PaymentPurposeRequest> = s.lazySchema(() =>
  s.object<PaymentPurposeRequest>(
    {
      ...paymentPurposeRequestProperties,
      text: s.optional(s.string().check(s.maxLength(250))),
    },
    { additionalProperties: s.json() },
  ),
);
