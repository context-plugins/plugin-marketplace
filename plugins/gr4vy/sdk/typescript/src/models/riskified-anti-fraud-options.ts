import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalShippingAddressesSchema,
  type AdditionalShippingAddresses,
} from "./unions/additional-shipping-addresses.js";
import { lineItemsSchema, type LineItems } from "./unions/line-items.js";
import { shippingLinesSchema, type ShippingLines } from "./unions/shipping-lines.js";

export type RiskifiedAntiFraudOptions = {
  /**
   * A list of line items details to override when passing to the Riskified API. Entries are matched
   * by position against the cart items sent to Riskified, which excludes `discount`,
   * `shipping_fee`, `sales_tax` and `store_credit` items.
   */
  lineItems?: LineItems;
  /**
   * A list of shipping lines details to override when passing to the Riskified API. Entries are
   * matched by position against the `shipping_fee` cart items.
   */
  shippingLines?: ShippingLines;
  /**
   * Additional destinations for orders shipped to more than one address. The address derived from
   * the transaction is always sent first; these are appended after it and may not use the reserved
   * `base-shipping-address` id.
   */
  additionalShippingAddresses?: AdditionalShippingAddresses;
};

export const riskifiedAntiFraudOptionsSchema: Schema<RiskifiedAntiFraudOptions> =
  s.object<RiskifiedAntiFraudOptions>({
    lineItems: s.optional(s.lazy(() => lineItemsSchema)),
    shippingLines: s.optional(s.lazy(() => shippingLinesSchema)),
    additionalShippingAddresses: s.optional(s.lazy(() => additionalShippingAddressesSchema)),
    _keysMap: {
      lineItems: "line_items",
      shippingLines: "shipping_lines",
      additionalShippingAddresses: "additional_shipping_addresses",
    },
  });
