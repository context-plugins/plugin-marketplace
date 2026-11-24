import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The Google Cloud Storage location for the output content. */
export type GcsDestination = {
  /**
   * Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under
   * 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://". One
   * 'output_uri_prefix' can only be used by one batch translation job at a time. Otherwise an
   * INVALID_ARGUMENT (400) error is returned.
   */
  outputUriPrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsDestinationSchema: Schema<GcsDestination> = s.object<GcsDestination>(
  {
    outputUriPrefix: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
