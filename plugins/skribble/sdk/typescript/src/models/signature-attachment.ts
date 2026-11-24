import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignatureAttachment = {
  attachmentId?: string;
  filename?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signatureAttachmentSchema: Schema<SignatureAttachment> = s.object<SignatureAttachment>(
  {
    attachmentId: s.optional(s.string()),
    filename: s.optional(s.string()),
    _keysMap: {
      attachmentId: "attachment_id",
    },
  },
  { additionalProperties: s.json() },
);
