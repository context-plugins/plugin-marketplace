import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { streamedChatDataSchema, type StreamedChatData } from "./streamed-chat-data.js";

export type StreamedToolAssistedChatToken = {
  /** The type of the event. @default "token" */
  event?: "token";
  data: StreamedChatData;
};

export const streamedToolAssistedChatTokenSchema: Schema<StreamedToolAssistedChatToken> =
  s.object<StreamedToolAssistedChatToken>({
    event: s.defaulted(s.literal("token"), "token"),
    data: streamedChatDataSchema,
  });
