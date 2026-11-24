import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnmodifiedLongStalenessSettings = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unmodifiedLongStalenessSettingsSchema: Schema<UnmodifiedLongStalenessSettings> =
  s.object<UnmodifiedLongStalenessSettings>(
    {
      enabled: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
