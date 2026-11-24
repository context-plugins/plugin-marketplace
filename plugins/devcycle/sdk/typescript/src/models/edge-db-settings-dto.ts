import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EdgeDbSettingsDto = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const edgeDbSettingsDtoSchema: Schema<EdgeDbSettingsDto> = s.object<EdgeDbSettingsDto>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
