import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The asset unrelation request. */
export type UnrelateAssetsByAssetIdRequest = {
  /**
   * Unrelates the asset from all the assets specified in this array of assets, specified by their
   * asset IDs.
   */
  assetsToUnrelate: string[];
};

export const unrelateAssetsByAssetIdRequestSchema: Schema<UnrelateAssetsByAssetIdRequest> =
  s.object<UnrelateAssetsByAssetIdRequest>({
    assetsToUnrelate: s.array(s.string()),
    _keysMap: {
      assetsToUnrelate: "assets_to_unrelate",
    },
  });
