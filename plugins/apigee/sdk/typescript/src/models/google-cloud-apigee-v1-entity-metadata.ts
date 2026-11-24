import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata common to many entities in this API. */
export type GoogleCloudApigeeV1EntityMetadata = {
  /** Time at which the API proxy was created, in milliseconds since epoch. */
  createdAt?: string;
  /** The type of entity described */
  subType?: string;
  /** Time at which the API proxy was most recently modified, in milliseconds since epoch. */
  lastModifiedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EntityMetadataSchema: Schema<GoogleCloudApigeeV1EntityMetadata> =
  s.object<GoogleCloudApigeeV1EntityMetadata>(
    {
      createdAt: s.optional(s.string()),
      subType: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
