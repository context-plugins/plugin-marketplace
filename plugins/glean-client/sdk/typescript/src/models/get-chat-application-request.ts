import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetChatApplicationRequest = {
  /** The id of the Chat application to be retrieved. */
  id: string;
};

export const getChatApplicationRequestSchema: Schema<GetChatApplicationRequest> =
  s.object<GetChatApplicationRequest>({
    id: s.string(),
  });
