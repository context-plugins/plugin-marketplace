import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VisualSearchParameters = {
  /** The URL of an image to use as the source for finding visually similar images */
  imageUrl: string;
  /**
   * The minimum similarity score (between 0 and 1.0) that a resource must have to be included in
   * the response
   */
  threshold?: number;
};

export const visualSearchParametersSchema: Schema<VisualSearchParameters> = s.object<VisualSearchParameters>({
  imageUrl: s.string(),
  threshold: s.optional(s.float64()),
  _keysMap: {
    imageUrl: "image_url",
  },
});
