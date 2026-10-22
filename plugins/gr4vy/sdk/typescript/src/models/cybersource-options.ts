import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments1Schema, type Comments1 } from "./unions/comments1.js";
import {
  merchantDefinedInformationSchema,
  type MerchantDefinedInformation,
} from "./unions/merchant-defined-information.js";
import { metaKeyMerchantId1Schema, type MetaKeyMerchantId1 } from "./unions/meta-key-merchant-id1.js";
import { shipToMethodSchema, type ShipToMethod } from "./unions/ship-to-method.js";

export type CybersourceOptions = {
  /**
   * The merchant ID to use for this transaction. This requires a meta key to be set up for use with
   * Cybersource, and this overrides the connector configuration.
   */
  metaKeyMerchantId?: MetaKeyMerchantId1;
  /**
   * A list of merchant defined data to be passed to the Cybersource. Each key needs to be a numeric
   * string.
   */
  merchantDefinedInformation?: MerchantDefinedInformation;
  /** The shipping method for this transaction. */
  shipToMethod?: ShipToMethod;
  /** Brief description of the order or any comment you wish to add to the order. */
  comments?: Comments1;
};

export const cybersourceOptionsSchema: Schema<CybersourceOptions> = s.object<CybersourceOptions>({
  metaKeyMerchantId: s.optional(s.lazy(() => metaKeyMerchantId1Schema)),
  merchantDefinedInformation: s.optional(s.lazy(() => merchantDefinedInformationSchema)),
  shipToMethod: s.optional(s.lazy(() => shipToMethodSchema)),
  comments: s.optional(s.lazy(() => comments1Schema)),
  _keysMap: {
    metaKeyMerchantId: "meta_key_merchant_id",
    merchantDefinedInformation: "merchant_defined_information",
    shipToMethod: "ship_to_method",
  },
});
