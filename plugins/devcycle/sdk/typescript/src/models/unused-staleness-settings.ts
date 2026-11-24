import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnusedStalenessSettings = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unusedStalenessSettingsSchema: Schema<UnusedStalenessSettings> =
  s.object<UnusedStalenessSettings>(
    {
      enabled: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
