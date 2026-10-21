import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetChatFilesRequest = {
  /** IDs of files to fetch. */
  fileIds: string[];
};

export const getChatFilesRequestSchema: Schema<GetChatFilesRequest> = s.object<GetChatFilesRequest>({
  fileIds: s.array(s.string()),
});
