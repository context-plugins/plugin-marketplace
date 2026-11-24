import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Profile for connecting to a Cloud Storage destination. */
export type GcsProfile = {
  /** Required. The Cloud Storage bucket name. */
  bucket?: string;
  /** Optional. The root path inside the Cloud Storage bucket. */
  rootPath?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsProfileSchema: Schema<GcsProfile> = s.object<GcsProfile>(
  {
    bucket: s.optional(s.string()),
    rootPath: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
