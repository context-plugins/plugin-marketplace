import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetectLabelsImagePropertiesSettings = {
  /**
   * The maximum number of dominant colors to return when detecting labels in an image. The default
   * value is 10.
   */
  maxDominantColors?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLabelsImagePropertiesSettingsSchema: Schema<DetectLabelsImagePropertiesSettings> =
  s.object<DetectLabelsImagePropertiesSettings>(
    {
      maxDominantColors: s.optional(s.int()),
      _keysMap: {
        maxDominantColors: "MaxDominantColors",
      },
    },
    { additionalProperties: s.json() },
  );
