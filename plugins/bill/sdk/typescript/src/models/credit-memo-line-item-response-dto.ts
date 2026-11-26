import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Credit Memo Create Request Line Item. */
export type CreditMemoLineItemResponseDto = {
  /** BILL-generated ID of the credit memo line item. The value begins with `cci`. */
  id?: string;
  /** Credit memo line item description */
  description?: string;
  /**
   * Credit memo line item unit price. For a credit memo in an international currency (not USD),
   * this value is in the local currency.
   */
  price?: number;
  /** Credit memo line item unit quantity */
  quantity?: number;
  /** Credit memo line item amount */
  amount?: number;
  /** Credit memo line item rate percent */
  ratePercent?: number;
  /** Set as `true` if the credit memo line item is taxable */
  taxable?: boolean;
  classifications?: ClassificationsBillV3CreditMemosApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditMemoLineItemResponseDtoSchema: Schema<CreditMemoLineItemResponseDto> =
  s.object<CreditMemoLineItemResponseDto>(
    {
      id: s.optional(s.string()),
      description: s.optional(s.string()),
      price: s.optional(s.float64()),
      quantity: s.optional(s.float64()),
      amount: s.optional(s.float64()),
      ratePercent: s.optional(s.float64()),
      taxable: s.optional(s.boolean()),
      classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
    },
    { additionalProperties: s.json() },
  );
