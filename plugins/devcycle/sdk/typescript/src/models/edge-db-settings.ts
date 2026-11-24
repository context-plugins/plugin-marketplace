import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EdgeDbSettings = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const edgeDbSettingsSchema: Schema<EdgeDbSettings> = s.object<EdgeDbSettings>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
