import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  streamedToolAssistedChatTokenSchema,
  type StreamedToolAssistedChatToken,
} from "../streamed-tool-assisted-chat-token.js";
import {
  streamedToolAssistedChatToolStatusSchema,
  type StreamedToolAssistedChatToolStatus,
} from "../streamed-tool-assisted-chat-tool-status.js";

export type ServerlessToolAssistedChatCompletionStreamSuccess =
  | (StreamedToolAssistedChatToken & { event: "token" })
  | (StreamedToolAssistedChatToolStatus & { event: "tool_status" });

export const serverlessToolAssistedChatCompletionStreamSuccessSchema: Schema<ServerlessToolAssistedChatCompletionStreamSuccess> =
  s.discriminatedUnion<ServerlessToolAssistedChatCompletionStreamSuccess>("event", {
    token: streamedToolAssistedChatTokenSchema,
    tool_status: streamedToolAssistedChatToolStatusSchema,
  });
