import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3RecurringbillsApiSchema,
  type ClassificationsBillV3RecurringbillsApi,
} from "./classifications-bill-v3-recurringbills-api.js";

/** Vendor Credit Replace Request Line Item. */
export type ReplaceVendorCreditLineItemDto = {
  /** BILL-generated ID of the vendor credit line item. The value begins with `vci`. */
  id?: string;
  /** Vendor credit line item description */
  description?: string;
  /**
   * Vendor credit line item amount. For a vendor credit in an international currency (not USD),
   * this value is in the local currency.
   */
  amount: number;
  classifications?: ClassificationsBillV3RecurringbillsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replaceVendorCreditLineItemDtoSchema: Schema<ReplaceVendorCreditLineItemDto> =
  s.object<ReplaceVendorCreditLineItemDto>(
    {
      id: s.optional(s.string()),
      description: s.optional(s.string()),
      amount: s.float64(),
      classifications: s.optional(s.lazy(() => classificationsBillV3RecurringbillsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
