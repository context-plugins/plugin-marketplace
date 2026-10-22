import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteChatFilesRequest = {
  /** IDs of files to delete. */
  fileIds: string[];
};

export const deleteChatFilesRequestSchema: Schema<DeleteChatFilesRequest> = s.object<DeleteChatFilesRequest>({
  fileIds: s.array(s.string()),
});
