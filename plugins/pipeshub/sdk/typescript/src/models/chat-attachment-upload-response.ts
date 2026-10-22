import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatAttachmentUploadRefSchema, type ChatAttachmentUploadRef } from "./chat-attachment-upload-ref.js";

/**
 * Success envelope returned by `POST /conversations/attachments/upload` and `POST
 * /agents/{agentKey}/conversations/attachments/upload`.
 */
export type ChatAttachmentUploadResponse = {
  /**
   * Existing conversation id echoed from the request when the upload is tied to a thread; otherwise
   * `null`.
   */
  conversationId: string | null;
  attachments: ChatAttachmentUploadRef[];
};

export const chatAttachmentUploadResponseSchema: Schema<ChatAttachmentUploadResponse> =
  s.object<ChatAttachmentUploadResponse>({
    conversationId: s.nullable(s.string()),
    attachments: s.array(s.lazy(() => chatAttachmentUploadRefSchema)),
  });
