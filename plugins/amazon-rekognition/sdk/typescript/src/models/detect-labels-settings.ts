import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  detectLabelsImagePropertiesSettingsSchema,
  type DetectLabelsImagePropertiesSettings,
} from "./detect-labels-image-properties-settings.js";
import { generalLabelsSettingsSchema, type GeneralLabelsSettings } from "./general-labels-settings.js";

export type DetectLabelsSettings = {
  generalLabels?: GeneralLabelsSettings;
  imageProperties?: DetectLabelsImagePropertiesSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectLabelsSettingsSchema: Schema<DetectLabelsSettings> = s.object<DetectLabelsSettings>(
  {
    generalLabels: s.optional(s.lazy(() => generalLabelsSettingsSchema)),
    imageProperties: s.optional(s.lazy(() => detectLabelsImagePropertiesSettingsSchema)),
    _keysMap: {
      generalLabels: "GeneralLabels",
      imageProperties: "ImageProperties",
    },
  },
  { additionalProperties: s.json() },
);
