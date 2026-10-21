import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Upload constraints returned by GET /knowledgeBase/limits. */
export type UploadLimitsResponseSchema = {
  /** Maximum number of files per upload request */
  maxFilesPerRequest: number;
  /** Maximum file size in bytes (default 30MB when platform settings unavailable) */
  maxFileSizeBytes: number;
};

export const uploadLimitsResponseSchemaSchema: Schema<UploadLimitsResponseSchema> =
  s.object<UploadLimitsResponseSchema>({
    maxFilesPerRequest: s.int(),
    maxFileSizeBytes: s.int(),
  });
