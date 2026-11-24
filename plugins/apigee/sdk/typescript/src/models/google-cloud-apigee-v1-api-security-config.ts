import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configurations of the API Security add-on. */
export type GoogleCloudApigeeV1ApiSecurityConfig = {
  /**
   * Output only. Time at which the API Security add-on expires in milliseconds since epoch. If
   * unspecified, the add-on will never expire.
   */
  expiresAt?: string;
  /** Flag that specifies whether the API security add-on is enabled. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiSecurityConfigSchema: Schema<GoogleCloudApigeeV1ApiSecurityConfig> =
  s.object<GoogleCloudApigeeV1ApiSecurityConfig>(
    {
      expiresAt: s.optional(s.string()),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
