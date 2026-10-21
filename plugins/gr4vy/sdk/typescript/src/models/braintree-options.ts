import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./unions/custom-fields.js";
import { discountAmount1Schema, type DiscountAmount1 } from "./unions/discount-amount1.js";
import { dynamicDataFieldsSchema, type DynamicDataFields } from "./unions/dynamic-data-fields.js";

export type BraintreeOptions = {
  /** Passes a discount amount to be applied to the transaction when using Braintree. */
  discountAmount?: DiscountAmount1;
  /**
   * Passes `customFields` to the Braintree API when creating a new payment. Custom fields allow you
   * to customize your checkout experience by collecting specific information about your customers
   * and their purchases.
   */
  customFields?: CustomFields;
  /** Additional dynamic fields to pass to the Braintree API */
  dynamicDataFields?: DynamicDataFields;
};

export const braintreeOptionsSchema: Schema<BraintreeOptions> = s.object<BraintreeOptions>({
  discountAmount: s.optional(s.lazy(() => discountAmount1Schema)),
  customFields: s.optional(s.lazy(() => customFieldsSchema)),
  dynamicDataFields: s.optional(s.lazy(() => dynamicDataFieldsSchema)),
  _keysMap: {
    discountAmount: "discount_amount",
    customFields: "custom_fields",
    dynamicDataFields: "dynamic_data_fields",
  },
});
