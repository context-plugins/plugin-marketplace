import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Google Cloud Storage location for the source input. This can be a single file (for example,
 * `gs://translation-test/input.docx`) or a wildcard (for example, `gs://translation-test/*`). File
 * mime type is determined based on extension. Supported mime type includes: - `pdf`,
 * application/pdf - `docx`, application/vnd.openxmlformats-officedocument.wordprocessingml.document
 * - `pptx`, application/vnd.openxmlformats-officedocument.presentationml.presentation - `xlsx`,
 * application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support
 * for `.docx`, `.pptx` and `.xlsx` is 100MB. The max file size to support for `.pdf` is 1GB and the
 * max page limit is 1000 pages. The max file size to support for all input documents is 1GB.
 */
export type GcsSource4 = {
  /** Required. Source data URI. For example, `gs://my_bucket/my_object`. */
  inputUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcsSource4Schema: Schema<GcsSource4> = s.object<GcsSource4>(
  {
    inputUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
