import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { presetSchema, type Preset } from "./preset.js";

export type ApiV1MiscFacebookTextFormatPresetsResponse = {
  presets: Preset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookTextFormatPresetsResponseSchema: Schema<ApiV1MiscFacebookTextFormatPresetsResponse> =
  s.object<ApiV1MiscFacebookTextFormatPresetsResponse>(
    {
      presets: s.array(s.lazy(() => presetSchema)),
    },
    { additionalProperties: s.json() },
  );
