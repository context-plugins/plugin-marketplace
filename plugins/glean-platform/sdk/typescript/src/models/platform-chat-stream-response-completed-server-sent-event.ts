import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatStreamResponseCompletedSchema,
  type PlatformChatStreamResponseCompleted,
} from "./platform-chat-stream-response-completed.js";

export type PlatformChatStreamResponseCompletedServerSentEvent = {
  id?: string;
  /** @default "RESPONSE_COMPLETED" */
  event?: "RESPONSE_COMPLETED";
  data: PlatformChatStreamResponseCompleted;
};

export const platformChatStreamResponseCompletedServerSentEventSchema: Schema<PlatformChatStreamResponseCompletedServerSentEvent> =
  s.object<PlatformChatStreamResponseCompletedServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("RESPONSE_COMPLETED"), "RESPONSE_COMPLETED"),
    data: platformChatStreamResponseCompletedSchema,
  });
