import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorSettingsSchema, type ColorSettings } from "./color-settings.js";

export type OptInSettings = {
  enabled: boolean;
  title: string;
  description: string;
  imageUrl: string;
  colors: ColorSettings;
  poweredByAlignment: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optInSettingsSchema: Schema<OptInSettings> = s.object<OptInSettings>(
  {
    enabled: s.boolean(),
    title: s.string(),
    description: s.string(),
    imageUrl: s.string(),
    colors: colorSettingsSchema,
    poweredByAlignment: s.record(s.string(), s.unknown()),
    _keysMap: {
      imageUrl: "imageURL",
    },
  },
  { additionalProperties: s.json() },
);
