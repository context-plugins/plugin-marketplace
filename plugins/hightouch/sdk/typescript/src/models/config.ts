import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Config = {
  /**
   * When true, the Decision Engine uses each variant's localeValues to select locale-appropriate
   * content at runtime. When false or omitted, only the default variant value is used, even if
   * localeValues are present.
   */
  localizationEnabled?: boolean;
  /** Rolling window in days for the maxSendsPerUser limit */
  maxSendsPerUserWindowDays?: number;
  /** Maximum number of times this variable's variants can be sent to a single user */
  maxSendsPerUser?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const configSchema: Schema<Config> = s.object<Config>(
  {
    localizationEnabled: s.optional(s.boolean()),
    maxSendsPerUserWindowDays: s.optional(s.float64()),
    maxSendsPerUser: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
