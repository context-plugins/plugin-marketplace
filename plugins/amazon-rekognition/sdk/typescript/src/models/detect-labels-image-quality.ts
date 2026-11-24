import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetectLabelsImageQuality = {
  /** The brightness of an image provided for label detection. */
  brightness?: number;
  /** The sharpness of an image provided for label detection. */
  sharpness?: number;
  /** The contrast of an image provided for label detection. */
  contrast?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLabelsImageQualitySchema: Schema<DetectLabelsImageQuality> =
  s.object<DetectLabelsImageQuality>(
    {
      brightness: s.optional(s.float64()),
      sharpness: s.optional(s.float64()),
      contrast: s.optional(s.float64()),
      _keysMap: {
        brightness: "Brightness",
        sharpness: "Sharpness",
        contrast: "Contrast",
      },
    },
    { additionalProperties: s.json() },
  );
