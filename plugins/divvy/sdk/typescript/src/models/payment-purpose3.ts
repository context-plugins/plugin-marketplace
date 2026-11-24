import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeBillV3VendorsApiSchema, type CodeBillV3VendorsApi } from "./code-bill-v3-vendors-api.js";

export type PaymentPurpose3 = {
  /** Payment purpose text */
  text?: string;
  code?: CodeBillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentPurpose3Schema: Schema<PaymentPurpose3> = s.object<PaymentPurpose3>(
  {
    text: s.optional(s.string()),
    code: s.optional(s.lazy(() => codeBillV3VendorsApiSchema)),
  },
  { additionalProperties: s.json() },
);
