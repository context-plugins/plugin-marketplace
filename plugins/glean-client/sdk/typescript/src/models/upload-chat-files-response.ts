import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatFileSchema, type ChatFile } from "./chat-file.js";

export type UploadChatFilesResponse = {
  /** Files uploaded for chat. */
  files?: ChatFile[];
};

export const uploadChatFilesResponseSchema: Schema<UploadChatFilesResponse> =
  s.object<UploadChatFilesResponse>({
    files: s.optional(s.array(s.lazy(() => chatFileSchema))),
  });
