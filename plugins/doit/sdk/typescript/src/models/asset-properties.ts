import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/** Additional properties associated with an asset, such as subscription and customer details. */
export type AssetProperties = {
  /** The primary domain of the customer associated with this asset. */
  customerDomain?: string;
  /** The unique identifier of the customer in the reseller or partner portal. */
  customerId?: string;
  /** The reseller domain through which this asset was provisioned. */
  reseller?: string;
  /** Subscription details for a G Suite or Office 365 asset. */
  subscription?: Subscription;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assetPropertiesSchema: Schema<AssetProperties> = s.object<AssetProperties>(
  {
    customerDomain: s.optional(s.string()),
    customerId: s.optional(s.string()),
    reseller: s.optional(s.string()),
    subscription: s.optional(s.lazy(() => subscriptionSchema)),
    _keysMap: {
      customerId: "customerID",
    },
  },
  { additionalProperties: s.json() },
);
