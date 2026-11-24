import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gcsSource4Schema, type GcsSource4 } from "./gcs-source4.js";

/** Input configuration for BatchTranslateDocument request. */
export type BatchDocumentInputConfig = {
  /**
   * Google Cloud Storage location for the source input. This can be a single file (for example,
   * `gs://translation-test/input.docx`) or a wildcard (for example, `gs://translation-test/*`).
   * File mime type is determined based on extension. Supported mime type includes: - `pdf`,
   * application/pdf - `docx`,
   * application/vnd.openxmlformats-officedocument.wordprocessingml.document - `pptx`,
   * application/vnd.openxmlformats-officedocument.presentationml.presentation - `xlsx`,
   * application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support
   * for `.docx`, `.pptx` and `.xlsx` is 100MB. The max file size to support for `.pdf` is 1GB and
   * the max page limit is 1000 pages. The max file size to support for all input documents is 1GB.
   */
  gcsSource?: GcsSource4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDocumentInputConfigSchema: Schema<BatchDocumentInputConfig> =
  s.object<BatchDocumentInputConfig>(
    {
      gcsSource: s.optional(s.lazy(() => gcsSource4Schema)),
    },
    { additionalProperties: s.json() },
  );
