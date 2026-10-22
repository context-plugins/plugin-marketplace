import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatStreamResponseFailedSchema,
  type PlatformChatStreamResponseFailed,
} from "./platform-chat-stream-response-failed.js";

export type PlatformChatStreamResponseFailedServerSentEvent = {
  id?: string;
  /** @default "RESPONSE_FAILED" */
  event?: "RESPONSE_FAILED";
  data: PlatformChatStreamResponseFailed;
};

export const platformChatStreamResponseFailedServerSentEventSchema: Schema<PlatformChatStreamResponseFailedServerSentEvent> =
  s.object<PlatformChatStreamResponseFailedServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("RESPONSE_FAILED"), "RESPONSE_FAILED"),
    data: platformChatStreamResponseFailedSchema,
  });
