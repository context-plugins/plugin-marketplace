import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Environment information of attached environments. Scoring an environment is enabled only if it is
 * attached to a security profile.
 */
export type GoogleCloudApigeeV1SecurityProfileEnvironment = {
  /** Output only. Time at which environment was attached to the security profile. */
  attachTime?: string;
  /** Output only. Name of the environment. */
  environment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityProfileEnvironmentSchema: Schema<GoogleCloudApigeeV1SecurityProfileEnvironment> =
  s.object<GoogleCloudApigeeV1SecurityProfileEnvironment>(
    {
      attachTime: s.optional(s.string()),
      environment: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
