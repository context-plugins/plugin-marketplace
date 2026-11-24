import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The Google Cloud Storage location for the input content. */
export type GcsSource = {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsSourceSchema: Schema<GcsSource> = s.object<GcsSource>(
  {
    inputUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
