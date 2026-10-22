import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VisualSearchParameters1 = {
  /** The asset ID of an existing image to use as the source for finding visually similar images */
  imageAssetId: string;
  /**
   * The minimum similarity score (between 0 and 1.0) that a resource must have to be included in
   * the response
   */
  threshold?: number;
};

export const visualSearchParameters1Schema: Schema<VisualSearchParameters1> =
  s.object<VisualSearchParameters1>({
    imageAssetId: s.string(),
    threshold: s.optional(s.float64()),
    _keysMap: {
      imageAssetId: "image_asset_id",
    },
  });
