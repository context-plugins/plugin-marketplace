import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnmodifiedShortStalenessSettings = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unmodifiedShortStalenessSettingsSchema: Schema<UnmodifiedShortStalenessSettings> =
  s.object<UnmodifiedShortStalenessSettings>(
    {
      enabled: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
