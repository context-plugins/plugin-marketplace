import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The version of the configuration schema to which this shared flow conforms. The only supported
 * value currently is majorVersion 4 and minorVersion 0. This setting may be used in the future to
 * enable evolution of the shared flow format.
 */
export type GoogleCloudApigeeV1ConfigVersion2 = {
  /** Major version of the API proxy configuration schema. */
  majorVersion?: number;
  /** Minor version of the API proxy configuration schema. */
  minorVersion?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ConfigVersion2Schema: Schema<GoogleCloudApigeeV1ConfigVersion2> =
  s.object<GoogleCloudApigeeV1ConfigVersion2>(
    {
      majorVersion: s.optional(s.int()),
      minorVersion: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
