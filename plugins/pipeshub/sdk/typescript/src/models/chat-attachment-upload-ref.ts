import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Concrete attachment metadata returned by `POST /conversations/attachments/upload` (or the
 * equivalent agent route).
 */
export type ChatAttachmentUploadRef = {
  /** Server-assigned attachment record id. */
  recordId: string;
  /** Original filename stored for the attachment. */
  recordName: string;
  /** MIME type of the uploaded file. */
  mimeType: string;
  /** File extension derived by the backend. */
  extension: string;
  /** Synthetic record id used by the graph layer. */
  virtualRecordId: string;
  /**
   * Backend-reported parsing mode used for the attachment (e.g. `pdfplumber`, `docling`,
   * `csv_lightweight`).
   */
  parseMode?: string;
  /**
   * Deprecated alias for `parseMode`, kept for backward compatibility. Use `parseMode` instead.
   *
   * @deprecated
   */
  ocrMode?: string;
};

export const chatAttachmentUploadRefSchema: Schema<ChatAttachmentUploadRef> =
  s.object<ChatAttachmentUploadRef>({
    recordId: s.string(),
    recordName: s.string(),
    mimeType: s.string(),
    extension: s.string(),
    virtualRecordId: s.string(),
    parseMode: s.optional(s.string()),
    ocrMode: s.optional(s.string()),
  });
