import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeBillV3VendorsApiSchema, type CodeBillV3VendorsApi } from "./code-bill-v3-vendors-api.js";

/** Payment purpose response. */
export type PaymentPurposeResponseBillV3VendorsApi = {
  /** Payment purpose text */
  text?: string;
  code?: CodeBillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentPurposeResponseBillV3VendorsApiSchema: Schema<PaymentPurposeResponseBillV3VendorsApi> =
  s.object<PaymentPurposeResponseBillV3VendorsApi>(
    {
      text: s.optional(s.string()),
      code: s.optional(s.lazy(() => codeBillV3VendorsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
