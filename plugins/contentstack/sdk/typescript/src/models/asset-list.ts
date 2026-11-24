import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assetInternalSchema, assetSchema, type Asset } from "./asset.js";

/** A paginated list of assets in the stack. */
export type AssetList = {
  /** Array of asset objects. */
  assets?: Asset[];
  /** Total count of assets when include_count is true. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const assetListProperties: s.Shape<AssetList> = {
  assets: s.optional(s.array(s.lazy(() => assetInternalSchema))),
  count: s.optional(s.int()),
};

export const assetListInternalSchema: Schema<AssetList> = s.object<AssetList>(assetListProperties, {
  additionalProperties: s.json(),
});

export const assetListSchema: Schema<AssetList> = s.lazySchema(() =>
  s.object<AssetList>(
    {
      ...assetListProperties,
      assets: s.optional(s.array(s.lazy(() => assetSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
