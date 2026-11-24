import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asset2InternalSchema, asset2Schema, type Asset2 } from "./asset2.js";

/** A paginated list of assets. */
export type AssetList2 = {
  /** Array of asset objects. */
  assets?: Asset2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const assetList2Properties: s.Shape<AssetList2> = {
  assets: s.optional(s.array(s.lazy(() => asset2InternalSchema))),
};

export const assetList2InternalSchema: Schema<AssetList2> = s.object<AssetList2>(assetList2Properties, {
  additionalProperties: s.json(),
});

export const assetList2Schema: Schema<AssetList2> = s.lazySchema(() =>
  s.object<AssetList2>(
    {
      ...assetList2Properties,
      assets: s.optional(s.array(s.lazy(() => asset2Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
