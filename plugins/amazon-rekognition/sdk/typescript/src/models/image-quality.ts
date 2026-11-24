import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ImageQuality = {
  /**
   * Value representing brightness of the face. The service returns a value between 0 and 100
   * (inclusive). A higher value indicates a brighter face image.
   */
  brightness?: number;
  /**
   * Value representing sharpness of the face. The service returns a value between 0 and 100
   * (inclusive). A higher value indicates a sharper face image.
   */
  sharpness?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imageQualitySchema: Schema<ImageQuality> = s.object<ImageQuality>(
  {
    brightness: s.optional(s.float64()),
    sharpness: s.optional(s.float64()),
    _keysMap: {
      brightness: "Brightness",
      sharpness: "Sharpness",
    },
  },
  { additionalProperties: s.json() },
);
