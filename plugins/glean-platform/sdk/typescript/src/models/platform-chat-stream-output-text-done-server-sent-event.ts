import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatStreamOutputTextDoneSchema,
  type PlatformChatStreamOutputTextDone,
} from "./platform-chat-stream-output-text-done.js";

export type PlatformChatStreamOutputTextDoneServerSentEvent = {
  id?: string;
  /** @default "RESPONSE_OUTPUT_TEXT_DONE" */
  event?: "RESPONSE_OUTPUT_TEXT_DONE";
  data: PlatformChatStreamOutputTextDone;
};

export const platformChatStreamOutputTextDoneServerSentEventSchema: Schema<PlatformChatStreamOutputTextDoneServerSentEvent> =
  s.object<PlatformChatStreamOutputTextDoneServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("RESPONSE_OUTPUT_TEXT_DONE"), "RESPONSE_OUTPUT_TEXT_DONE"),
    data: platformChatStreamOutputTextDoneSchema,
  });
