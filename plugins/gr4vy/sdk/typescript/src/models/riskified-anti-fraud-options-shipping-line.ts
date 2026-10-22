import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shippingAddressId1Schema, type ShippingAddressId1 } from "./unions/shipping-address-id1.js";

export type RiskifiedAntiFraudOptionsShippingLine = {
  /**
   * The shipping address this delivery charge applies to. Must be `base-shipping-address` for the
   * address derived from the transaction, or the `id` of an `additional_shipping_addresses` entry.
   * Must not be provided when `additional_shipping_addresses` is empty.
   */
  shippingAddressId?: ShippingAddressId1;
};

export const riskifiedAntiFraudOptionsShippingLineSchema: Schema<RiskifiedAntiFraudOptionsShippingLine> =
  s.object<RiskifiedAntiFraudOptionsShippingLine>({
    shippingAddressId: s.optional(s.lazy(() => shippingAddressId1Schema)),
    _keysMap: {
      shippingAddressId: "shipping_address_id",
    },
  });
