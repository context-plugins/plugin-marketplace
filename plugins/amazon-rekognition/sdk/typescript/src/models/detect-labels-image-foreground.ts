import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  detectLabelsImageQualitySchema,
  type DetectLabelsImageQuality,
} from "./detect-labels-image-quality.js";
import { dominantColorSchema, type DominantColor } from "./dominant-color.js";

export type DetectLabelsImageForeground = {
  quality?: DetectLabelsImageQuality;
  /**
   * The dominant colors found in the foreground of an image, defined with RGB values, CSS color
   * name, simplified color name, and PixelPercentage (the percentage of image pixels that have a
   * particular color).
   */
  dominantColors?: DominantColor[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLabelsImageForegroundSchema: Schema<DetectLabelsImageForeground> =
  s.object<DetectLabelsImageForeground>(
    {
      quality: s.optional(s.lazy(() => detectLabelsImageQualitySchema)),
      dominantColors: s.optional(s.array(s.lazy(() => dominantColorSchema))),
      _keysMap: {
        quality: "Quality",
        dominantColors: "DominantColors",
      },
    },
    { additionalProperties: s.json() },
  );
