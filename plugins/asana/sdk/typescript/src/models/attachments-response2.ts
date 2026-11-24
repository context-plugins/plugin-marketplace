import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentCompactSchema, type AttachmentCompact } from "./attachment-compact.js";

export type AttachmentsResponse2 = {
  data?: AttachmentCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentsResponse2Schema: Schema<AttachmentsResponse2> = s.object<AttachmentsResponse2>(
  {
    data: s.optional(s.array(s.lazy(() => attachmentCompactSchema))),
  },
  { additionalProperties: s.json() },
);
