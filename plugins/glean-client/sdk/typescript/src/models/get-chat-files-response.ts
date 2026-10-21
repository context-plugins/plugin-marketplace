import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatFileSchema, type ChatFile } from "./chat-file.js";

export type GetChatFilesResponse = {
  /** A map of file IDs to ChatFile structs. */
  files?: Record<string, ChatFile>;
};

export const getChatFilesResponseSchema: Schema<GetChatFilesResponse> = s.object<GetChatFilesResponse>({
  files: s.optional(
    s.record(
      s.string(),
      s.lazy(() => chatFileSchema),
    ),
  ),
});
