import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatStreamOutputTextDeltaSchema,
  type PlatformChatStreamOutputTextDelta,
} from "./platform-chat-stream-output-text-delta.js";

export type PlatformChatStreamOutputTextDeltaServerSentEvent = {
  id?: string;
  /** @default "RESPONSE_OUTPUT_TEXT_DELTA" */
  event?: "RESPONSE_OUTPUT_TEXT_DELTA";
  data: PlatformChatStreamOutputTextDelta;
};

export const platformChatStreamOutputTextDeltaServerSentEventSchema: Schema<PlatformChatStreamOutputTextDeltaServerSentEvent> =
  s.object<PlatformChatStreamOutputTextDeltaServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("RESPONSE_OUTPUT_TEXT_DELTA"), "RESPONSE_OUTPUT_TEXT_DELTA"),
    data: platformChatStreamOutputTextDeltaSchema,
  });
