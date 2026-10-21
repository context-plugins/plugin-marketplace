import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { streamedChatDataSchema, type StreamedChatData } from "./streamed-chat-data.js";

export type StreamedChatResult = {
  data: StreamedChatData;
};

export const streamedChatResultSchema: Schema<StreamedChatResult> = s.object<StreamedChatResult>({
  data: streamedChatDataSchema,
});
