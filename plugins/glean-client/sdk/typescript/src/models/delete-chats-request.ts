import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteChatsRequest = {
  /** A non-empty list of ids of the Chats to be deleted. */
  ids: string[];
};

export const deleteChatsRequestSchema: Schema<DeleteChatsRequest> = s.object<DeleteChatsRequest>({
  ids: s.array(s.string()),
});
