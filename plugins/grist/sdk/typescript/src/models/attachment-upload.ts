import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AttachmentUpload = {
  /**
   * File to add. Grist accepts several "upload" parts per request; APIMatic codegen does not
   * support an array of files, so this is one file per call.
   */
  upload?: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentUploadSchema: Schema<AttachmentUpload> = s.object<AttachmentUpload>(
  {
    upload: s.optional(s.bytes()),
  },
  { additionalProperties: s.json() },
);
