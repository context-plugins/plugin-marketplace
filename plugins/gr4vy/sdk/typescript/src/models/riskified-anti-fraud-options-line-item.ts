import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliveredTo1Schema, type DeliveredTo1 } from "./unions/delivered-to1.js";
import { shippingAddressIdSchema, type ShippingAddressId } from "./unions/shipping-address-id.js";

export type RiskifiedAntiFraudOptionsLineItem = {
  /** Indicates whether the item will be shipped or picked up. */
  deliveredTo?: DeliveredTo1;
  /**
   * The shipping address this item is delivered to. Must be `base-shipping-address` for the address
   * derived from the transaction, or the `id` of an `additional_shipping_addresses` entry. Must not
   * be provided when `additional_shipping_addresses` is empty.
   */
  shippingAddressId?: ShippingAddressId;
};

export const riskifiedAntiFraudOptionsLineItemSchema: Schema<RiskifiedAntiFraudOptionsLineItem> =
  s.object<RiskifiedAntiFraudOptionsLineItem>({
    deliveredTo: s.optional(s.lazy(() => deliveredTo1Schema)),
    shippingAddressId: s.optional(s.lazy(() => shippingAddressIdSchema)),
    _keysMap: {
      deliveredTo: "delivered_to",
      shippingAddressId: "shipping_address_id",
    },
  });
