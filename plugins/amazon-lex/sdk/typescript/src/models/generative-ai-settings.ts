import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildtimeSettingsSchema, type BuildtimeSettings } from "./buildtime-settings.js";
import { runtimeSettingsSchema, type RuntimeSettings } from "./runtime-settings.js";

export type GenerativeAiSettings = {
  runtimeSettings?: RuntimeSettings;
  buildtimeSettings?: BuildtimeSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const generativeAiSettingsSchema: Schema<GenerativeAiSettings> = s.object<GenerativeAiSettings>(
  {
    runtimeSettings: s.optional(s.lazy(() => runtimeSettingsSchema)),
    buildtimeSettings: s.optional(s.lazy(() => buildtimeSettingsSchema)),
  },
  { additionalProperties: s.json() },
);
