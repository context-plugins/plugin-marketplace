import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformChatStreamOutputTextDeltaServerSentEventSchema,
  type PlatformChatStreamOutputTextDeltaServerSentEvent,
} from "../platform-chat-stream-output-text-delta-server-sent-event.js";
import {
  platformChatStreamOutputTextDoneServerSentEventSchema,
  type PlatformChatStreamOutputTextDoneServerSentEvent,
} from "../platform-chat-stream-output-text-done-server-sent-event.js";
import {
  platformChatStreamProgressServerSentEventSchema,
  type PlatformChatStreamProgressServerSentEvent,
} from "../platform-chat-stream-progress-server-sent-event.js";
import {
  platformChatStreamResponseCompletedServerSentEventSchema,
  type PlatformChatStreamResponseCompletedServerSentEvent,
} from "../platform-chat-stream-response-completed-server-sent-event.js";
import {
  platformChatStreamResponseCreatedServerSentEventSchema,
  type PlatformChatStreamResponseCreatedServerSentEvent,
} from "../platform-chat-stream-response-created-server-sent-event.js";
import {
  platformChatStreamResponseFailedServerSentEventSchema,
  type PlatformChatStreamResponseFailedServerSentEvent,
} from "../platform-chat-stream-response-failed-server-sent-event.js";

/** A typed server-sent event. */
export type PlatformChatStreamEventServerSentEvent =
  | (PlatformChatStreamResponseCreatedServerSentEvent & { event: "RESPONSE_CREATED" })
  | (PlatformChatStreamProgressServerSentEvent & { event: "RESPONSE_PROGRESS" })
  | (PlatformChatStreamOutputTextDeltaServerSentEvent & { event: "RESPONSE_OUTPUT_TEXT_DELTA" })
  | (PlatformChatStreamOutputTextDoneServerSentEvent & { event: "RESPONSE_OUTPUT_TEXT_DONE" })
  | (PlatformChatStreamResponseCompletedServerSentEvent & { event: "RESPONSE_COMPLETED" })
  | (PlatformChatStreamResponseFailedServerSentEvent & { event: "RESPONSE_FAILED" });

export const platformChatStreamEventServerSentEventSchema: Schema<PlatformChatStreamEventServerSentEvent> =
  s.discriminatedUnion<PlatformChatStreamEventServerSentEvent>("event", {
    RESPONSE_CREATED: platformChatStreamResponseCreatedServerSentEventSchema,
    RESPONSE_PROGRESS: platformChatStreamProgressServerSentEventSchema,
    RESPONSE_OUTPUT_TEXT_DELTA: platformChatStreamOutputTextDeltaServerSentEventSchema,
    RESPONSE_OUTPUT_TEXT_DONE: platformChatStreamOutputTextDoneServerSentEventSchema,
    RESPONSE_COMPLETED: platformChatStreamResponseCompletedServerSentEventSchema,
    RESPONSE_FAILED: platformChatStreamResponseFailedServerSentEventSchema,
  });
