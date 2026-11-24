import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Version of the API proxy configuration schema to which the API proxy conforms. Currently, the
 * only supported value is 4.0 (`majorVersion.minorVersion`). This setting may be used in the future
 * to track the evolution of the API proxy format.
 */
export type GoogleCloudApigeeV1ConfigVersion3 = {
  /** Major version of the API proxy configuration schema. */
  majorVersion?: number;
  /** Minor version of the API proxy configuration schema. */
  minorVersion?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ConfigVersion3Schema: Schema<GoogleCloudApigeeV1ConfigVersion3> =
  s.object<GoogleCloudApigeeV1ConfigVersion3>(
    {
      majorVersion: s.optional(s.int()),
      minorVersion: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
