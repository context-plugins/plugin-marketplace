import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantDefinedDataSchema, type MerchantDefinedData } from "./unions/merchant-defined-data.js";
import { metaKeyMerchantIdSchema, type MetaKeyMerchantId } from "./unions/meta-key-merchant-id.js";
import { shippingMethodSchema, type ShippingMethod } from "./unions/shipping-method.js";

export type CybersourceAntiFraudOptions = {
  /**
   * A list of merchant defined data to be passed to the Cybersource Decision Manager API. Each key
   * needs to be a numeric string.
   */
  merchantDefinedData?: MerchantDefinedData;
  /**
   * The merchant ID to use for this transaction. This requires a meta key to be set up for use with
   * Cybersource Decision Manager, and this overrides the connector configuration.
   */
  metaKeyMerchantId?: MetaKeyMerchantId;
  /** The shipping method for this transaction. */
  shippingMethod?: ShippingMethod;
};

export const cybersourceAntiFraudOptionsSchema: Schema<CybersourceAntiFraudOptions> =
  s.object<CybersourceAntiFraudOptions>({
    merchantDefinedData: s.optional(s.lazy(() => merchantDefinedDataSchema)),
    metaKeyMerchantId: s.optional(s.lazy(() => metaKeyMerchantIdSchema)),
    shippingMethod: s.optional(s.lazy(() => shippingMethodSchema)),
    _keysMap: {
      merchantDefinedData: "merchant_defined_data",
      metaKeyMerchantId: "meta_key_merchant_id",
      shippingMethod: "shipping_method",
    },
  });
