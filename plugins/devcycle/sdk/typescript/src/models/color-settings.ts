import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ColorSettings = {
  primary: string;
  secondary: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const colorSettingsSchema: Schema<ColorSettings> = s.object<ColorSettings>(
  {
    primary: s.string(),
    secondary: s.string(),
  },
  { additionalProperties: s.json() },
);
