import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assetSchema, type Asset } from "./asset.js";

/** OData collection response containing assets */
export type ODataAssetCollection = {
  value?: Asset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataAssetCollectionSchema: Schema<ODataAssetCollection> = s.object<ODataAssetCollection>(
  {
    value: s.optional(s.array(s.lazy(() => assetSchema))),
  },
  { additionalProperties: s.json() },
);
