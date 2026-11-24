import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assetPropertiesSchema, type AssetProperties } from "./asset-properties.js";

export type BillingV1AssetsResponse1 = {
  id?: string;
  /** Additional properties associated with an asset, such as subscription and customer details. */
  properties?: AssetProperties;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingV1AssetsResponse1Schema: Schema<BillingV1AssetsResponse1> =
  s.object<BillingV1AssetsResponse1>(
    {
      id: s.optional(s.string()),
      properties: s.optional(s.lazy(() => assetPropertiesSchema)),
      type: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
