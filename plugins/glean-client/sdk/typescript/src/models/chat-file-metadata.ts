import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatFileFailureReasonSchema, type ChatFileFailureReason } from "./chat-file-failure-reason.js";
import { chatFileStatusSchema, type ChatFileStatus } from "./chat-file-status.js";

/** Metadata of a file uploaded by a user for Chat. */
export type ChatFileMetadata = {
  /** Current status of the file. */
  status?: ChatFileStatus;
  /** Upload time, in epoch seconds. */
  uploadTime?: number;
  /** Size of the processed file in bytes. */
  processedSize?: number;
  /** Reason for failed status. */
  failureReason?: ChatFileFailureReason;
  /** MIME type of the file. */
  mimeType?: string;
};

export const chatFileMetadataSchema: Schema<ChatFileMetadata> = s.object<ChatFileMetadata>({
  status: s.optional(s.lazy(() => chatFileStatusSchema)),
  uploadTime: s.optional(s.int()),
  processedSize: s.optional(s.int()),
  failureReason: s.optional(s.lazy(() => chatFileFailureReasonSchema)),
  mimeType: s.optional(s.string()),
});
