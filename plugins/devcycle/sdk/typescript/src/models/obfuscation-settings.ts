import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ObfuscationSettings = {
  enabled: boolean;
  required: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const obfuscationSettingsSchema: Schema<ObfuscationSettings> = s.object<ObfuscationSettings>(
  {
    enabled: s.boolean(),
    required: s.boolean(),
  },
  { additionalProperties: s.json() },
);
