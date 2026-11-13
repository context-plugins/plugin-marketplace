import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AttachmentMetadata = {
  fileName?: string;
  fileSize?: number;
  timeUploaded?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentMetadataSchema: Schema<AttachmentMetadata> = s.object<AttachmentMetadata>(
  {
    fileName: s.optional(s.string()),
    fileSize: s.optional(s.float64()),
    timeUploaded: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
