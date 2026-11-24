import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Runtime configuration for API Security add-on. */
export type GoogleCloudApigeeV1RuntimeApiSecurityConfig2 = {
  /** If the API Security is enabled or not. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeApiSecurityConfig2Schema: Schema<GoogleCloudApigeeV1RuntimeApiSecurityConfig2> =
  s.object<GoogleCloudApigeeV1RuntimeApiSecurityConfig2>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
