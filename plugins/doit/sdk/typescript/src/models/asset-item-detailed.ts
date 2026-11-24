import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assetPropertiesSchema, type AssetProperties } from "./asset-properties.js";

/** Detailed information about a single asset, including subscription properties. */
export type AssetItemDetailed = {
  /** The time when the asset was created, in milliseconds since the epoch. */
  createTime?: number;
  /** The unique identifier of the asset. */
  id?: string;
  /**
   * A human-readable label for the asset, typically combining the product name and domain or
   * account ID.
   */
  name?: string;
  /** The number of licenses or seats currently assigned to this asset. */
  quantity?: number;
  /**
   * The asset type, e.g. g-suite, office-365, google-cloud, amazon-web-services, or
   * microsoft-azure.
   */
  type?: string;
  /** A link to the asset details page in the DoiT console. */
  url?: string;
  /** Additional properties associated with an asset, such as subscription and customer details. */
  properties?: AssetProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assetItemDetailedSchema: Schema<AssetItemDetailed> = s.object<AssetItemDetailed>(
  {
    createTime: s.optional(s.int()),
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    quantity: s.optional(s.int()),
    type: s.optional(s.string()),
    url: s.optional(s.string()),
    properties: s.optional(s.lazy(() => assetPropertiesSchema)),
  },
  { additionalProperties: s.json() },
);
