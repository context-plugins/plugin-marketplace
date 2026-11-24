import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Runtime configuration for the API Security add-on. */
export type GoogleCloudApigeeV1RuntimeApiSecurityConfig = {
  /** If the API Security is enabled or not. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeApiSecurityConfigSchema: Schema<GoogleCloudApigeeV1RuntimeApiSecurityConfig> =
  s.object<GoogleCloudApigeeV1RuntimeApiSecurityConfig>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
