import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  detectLabelsImageBackgroundSchema,
  type DetectLabelsImageBackground,
} from "./detect-labels-image-background.js";
import {
  detectLabelsImageForegroundSchema,
  type DetectLabelsImageForeground,
} from "./detect-labels-image-foreground.js";
import {
  detectLabelsImageQualitySchema,
  type DetectLabelsImageQuality,
} from "./detect-labels-image-quality.js";
import { dominantColorSchema, type DominantColor } from "./dominant-color.js";

export type DetectLabelsImageProperties = {
  quality?: DetectLabelsImageQuality;
  /**
   * Information about the dominant colors found in an image, described with RGB values, CSS color
   * name, simplified color name, and PixelPercentage (the percentage of image pixels that have a
   * particular color).
   */
  dominantColors?: DominantColor[];
  foreground?: DetectLabelsImageForeground;
  background?: DetectLabelsImageBackground;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLabelsImagePropertiesSchema: Schema<DetectLabelsImageProperties> =
  s.object<DetectLabelsImageProperties>(
    {
      quality: s.optional(s.lazy(() => detectLabelsImageQualitySchema)),
      dominantColors: s.optional(s.array(s.lazy(() => dominantColorSchema))),
      foreground: s.optional(s.lazy(() => detectLabelsImageForegroundSchema)),
      background: s.optional(s.lazy(() => detectLabelsImageBackgroundSchema)),
      _keysMap: {
        quality: "Quality",
        dominantColors: "DominantColors",
        foreground: "Foreground",
        background: "Background",
      },
    },
    { additionalProperties: s.json() },
  );
