import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Config = {
  quotaTotal?: number;
  quotaDuration?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const configSchema: Schema<Config> = s.object<Config>(
  {
    quotaTotal: s.optional(s.int()),
    quotaDuration: s.optional(s.int()),
    _keysMap: {
      quotaTotal: "quota_total",
      quotaDuration: "quota_duration",
    },
  },
  { additionalProperties: s.json() },
);
