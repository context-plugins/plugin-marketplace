import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Google Cloud Storage location. This must be a single file. For example:
 * gs://example_bucket/example_file.pdf
 */
export type GcsSource1 = {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsSource1Schema: Schema<GcsSource1> = s.object<GcsSource1>(
  {
    inputUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
