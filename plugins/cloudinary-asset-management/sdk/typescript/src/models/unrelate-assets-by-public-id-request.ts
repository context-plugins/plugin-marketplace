import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The asset unrelation request. */
export type UnrelateAssetsByPublicIdRequest = {
  /**
   * Unrelates the asset from all the assets specified in this array of assets, specified as
   * resource_type/type/public_id.
   */
  assetsToUnrelate: string[];
};

export const unrelateAssetsByPublicIdRequestSchema: Schema<UnrelateAssetsByPublicIdRequest> =
  s.object<UnrelateAssetsByPublicIdRequest>({
    assetsToUnrelate: s.array(s.string()),
    _keysMap: {
      assetsToUnrelate: "assets_to_unrelate",
    },
  });
