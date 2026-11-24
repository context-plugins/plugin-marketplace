import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. Metadata describing the API proxy. */
export type GoogleCloudApigeeV1EntityMetadata3 = {
  /** Time at which the API proxy was created, in milliseconds since epoch. */
  createdAt?: string;
  /** The type of entity described */
  subType?: string;
  /** Time at which the API proxy was most recently modified, in milliseconds since epoch. */
  lastModifiedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EntityMetadata3Schema: Schema<GoogleCloudApigeeV1EntityMetadata3> =
  s.object<GoogleCloudApigeeV1EntityMetadata3>(
    {
      createdAt: s.optional(s.string()),
      subType: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
