import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Specifies an optional destination for the recognition results. */
export type TranscriptOutputConfig2 = {
  /**
   * Specifies a Cloud Storage URI for the recognition results. Must be specified in the format:
   * `gs://bucket_name/object_name`, and the bucket must already exist.
   */
  gcsUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptOutputConfig2Schema: Schema<TranscriptOutputConfig2> =
  s.object<TranscriptOutputConfig2>(
    {
      gcsUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
