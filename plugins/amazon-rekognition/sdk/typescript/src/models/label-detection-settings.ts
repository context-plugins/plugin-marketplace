import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { generalLabelsSettingsSchema, type GeneralLabelsSettings } from "./general-labels-settings.js";

export type LabelDetectionSettings = {
  generalLabels?: GeneralLabelsSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelDetectionSettingsSchema: Schema<LabelDetectionSettings> = s.object<LabelDetectionSettings>(
  {
    generalLabels: s.optional(s.lazy(() => generalLabelsSettingsSchema)),
    _keysMap: {
      generalLabels: "GeneralLabels",
    },
  },
  { additionalProperties: s.json() },
);
