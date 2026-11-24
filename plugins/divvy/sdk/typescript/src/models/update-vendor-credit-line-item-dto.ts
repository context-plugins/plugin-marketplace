import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3RecurringbillsApiSchema,
  type ClassificationsBillV3RecurringbillsApi,
} from "./classifications-bill-v3-recurringbills-api.js";

/** Vendor Credit Create Request Line Item. */
export type UpdateVendorCreditLineItemDto = {
  /** BILL-generated ID of the vendor credit line item. The value begins with `vci`. */
  id: string;
  /** Vendor credit line item description */
  description?: string;
  /**
   * Vendor credit line item amount. For a vendor credit in an international currency (not USD),
   * this value is in the local currency.
   */
  amount?: number;
  classifications?: ClassificationsBillV3RecurringbillsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateVendorCreditLineItemDtoProperties: s.Shape<UpdateVendorCreditLineItemDto> = {
  id: s.string(),
  description: s.optional(s.string()),
  amount: s.optional(s.float64()),
  classifications: s.optional(s.lazy(() => classificationsBillV3RecurringbillsApiSchema)),
};

export const updateVendorCreditLineItemDtoInternalSchema: Schema<UpdateVendorCreditLineItemDto> =
  s.object<UpdateVendorCreditLineItemDto>(updateVendorCreditLineItemDtoProperties, {
    additionalProperties: s.json(),
  });

export const updateVendorCreditLineItemDtoSchema: Schema<UpdateVendorCreditLineItemDto> = s.lazySchema(() =>
  s.object<UpdateVendorCreditLineItemDto>(
    {
      ...updateVendorCreditLineItemDtoProperties,
      id: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
