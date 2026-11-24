import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** CreditMemo usage Dto. */
export type CreditMemoUsageDto = {
  /** BILL-generated ID of the invoice to which the credit memo is applied */
  invoiceId?: string;
  /** Credit memo amount applied to the invoice */
  amount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditMemoUsageDtoSchema: Schema<CreditMemoUsageDto> = s.object<CreditMemoUsageDto>(
  {
    invoiceId: s.optional(s.string()),
    amount: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
