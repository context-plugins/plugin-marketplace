import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The Google Cloud Storage location for the output content. */
export type GcsOutputDestination = {
  /**
   * Required. Google Cloud Storage URI to output directory. For example, `gs://bucket/directory`.
   * The requesting user must have write permission to the bucket. The directory will be created if
   * it doesn't exist.
   */
  outputUriPrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsOutputDestinationSchema: Schema<GcsOutputDestination> = s.object<GcsOutputDestination>(
  {
    outputUriPrefix: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
