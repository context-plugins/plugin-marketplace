import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetChatRequest = {
  /** The id of the Chat to be retrieved. */
  id: string;
};

export const getChatRequestSchema: Schema<GetChatRequest> = s.object<GetChatRequest>({
  id: s.string(),
});
