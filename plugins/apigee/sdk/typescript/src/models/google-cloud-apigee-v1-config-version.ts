import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Version of the API proxy configuration schema. Currently, only 4.0 is supported. */
export type GoogleCloudApigeeV1ConfigVersion = {
  /** Major version of the API proxy configuration schema. */
  majorVersion?: number;
  /** Minor version of the API proxy configuration schema. */
  minorVersion?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ConfigVersionSchema: Schema<GoogleCloudApigeeV1ConfigVersion> =
  s.object<GoogleCloudApigeeV1ConfigVersion>(
    {
      majorVersion: s.optional(s.int()),
      minorVersion: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
