import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The asset relation request. */
export type RelateAssetsByAssetIdRequest = {
  /**
   * Relates the asset to all the assets specified in this array of up to 10 assets, specified by
   * their asset IDs.
   */
  assetsToRelate: string[];
};

export const relateAssetsByAssetIdRequestSchema: Schema<RelateAssetsByAssetIdRequest> =
  s.object<RelateAssetsByAssetIdRequest>({
    assetsToRelate: s.array(s.string()),
    _keysMap: {
      assetsToRelate: "assets_to_relate",
    },
  });
