import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatResultSchema, type ChatResult } from "./chat-result.js";

export type GetChatResponse = {
  chatResult?: ChatResult;
};

export const getChatResponseSchema: Schema<GetChatResponse> = s.object<GetChatResponse>({
  chatResult: s.optional(s.lazy(() => chatResultSchema)),
});
