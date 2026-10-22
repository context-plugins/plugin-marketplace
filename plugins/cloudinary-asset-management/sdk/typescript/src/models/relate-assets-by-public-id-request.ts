import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The asset relation request. */
export type RelateAssetsByPublicIdRequest = {
  /**
   * Relates the asset to all the other assets specified in this array of up to 10 assets, specified
   * as resource_type/type/public_id.
   */
  assetsToRelate: string[];
};

export const relateAssetsByPublicIdRequestSchema: Schema<RelateAssetsByPublicIdRequest> =
  s.object<RelateAssetsByPublicIdRequest>({
    assetsToRelate: s.array(s.string()),
    _keysMap: {
      assetsToRelate: "assets_to_relate",
    },
  });
