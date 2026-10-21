import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Reference to an attachment produced by `POST /conversations/attachments/upload` (or the
 * equivalent agent route). Include in create/stream/message bodies so the turn is sent with
 * uploaded files.
 */
export type ChatAttachmentRef = {
  /** Attachment record id returned from the upload endpoint. */
  recordId: string;
  /** Original display name of the file when known. */
  recordName?: string;
  /** MIME type of the uploaded file. */
  mimeType?: string;
  /** File extension (e.g. `pdf`). */
  extension?: string;
  /** Optional synthetic record id used by the graph layer. */
  virtualRecordId?: string;
};

export const chatAttachmentRefSchema: Schema<ChatAttachmentRef> = s.object<ChatAttachmentRef>({
  recordId: s.string(),
  recordName: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  extension: s.optional(s.string()),
  virtualRecordId: s.optional(s.string()),
});
