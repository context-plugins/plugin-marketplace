import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorLogSettings = {
  /** Settings parameters for the error logs, when it is enabled. */
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorLogSettingsSchema: Schema<ErrorLogSettings> = s.object<ErrorLogSettings>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
