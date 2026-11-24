import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Google Cloud Storage destination to write the output. */
export type GcsOutputDestination2 = {
  /**
   * Required. Google Cloud Storage URI to output directory. For example, `gs://bucket/directory`.
   * The requesting user must have write permission to the bucket. The directory will be created if
   * it doesn't exist.
   */
  outputUriPrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsOutputDestination2Schema: Schema<GcsOutputDestination2> = s.object<GcsOutputDestination2>(
  {
    outputUriPrefix: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
