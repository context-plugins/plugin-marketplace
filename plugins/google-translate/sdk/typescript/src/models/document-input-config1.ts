import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gcsSource1Schema, type GcsSource1 } from "./gcs-source1.js";

/** Optional. The document configuration of the input. */
export type DocumentInputConfig1 = {
  /**
   * Google Cloud Storage location. This must be a single file. For example:
   * gs://example_bucket/example_file.pdf
   */
  gcsSource?: GcsSource1;
  /** Document's content represented as a stream of bytes. */
  content?: string;
  /**
   * Specifies the input document's mime_type. If not specified it will be determined using the file
   * extension for gcs_source provided files. For a file provided through bytes content the
   * mime_type must be provided. Currently supported mime types are: - application/pdf -
   * application/vnd.openxmlformats-officedocument.wordprocessingml.document -
   * application/vnd.openxmlformats-officedocument.presentationml.presentation -
   * application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
   */
  mimeType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentInputConfig1Schema: Schema<DocumentInputConfig1> = s.object<DocumentInputConfig1>(
  {
    gcsSource: s.optional(s.lazy(() => gcsSource1Schema)),
    content: s.optional(s.string()),
    mimeType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
