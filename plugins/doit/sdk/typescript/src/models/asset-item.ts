import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Summary information about a single asset. */
export type AssetItem = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assetItemSchema: Schema<AssetItem> = s.object<AssetItem>(
  {
    createTime: s.optional(s.int()),
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    quantity: s.optional(s.int()),
    type: s.optional(s.string()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
