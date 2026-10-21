import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformChatStreamOutputTextDeltaSchema,
  type PlatformChatStreamOutputTextDelta,
} from "../platform-chat-stream-output-text-delta.js";
import {
  platformChatStreamOutputTextDoneSchema,
  type PlatformChatStreamOutputTextDone,
} from "../platform-chat-stream-output-text-done.js";
import {
  platformChatStreamProgressSchema,
  type PlatformChatStreamProgress,
} from "../platform-chat-stream-progress.js";
import {
  platformChatStreamResponseCompletedSchema,
  type PlatformChatStreamResponseCompleted,
} from "../platform-chat-stream-response-completed.js";
import {
  platformChatStreamResponseCreatedSchema,
  type PlatformChatStreamResponseCreated,
} from "../platform-chat-stream-response-created.js";
import {
  platformChatStreamResponseFailedSchema,
  type PlatformChatStreamResponseFailed,
} from "../platform-chat-stream-response-failed.js";

/**
 * JSON object written to the SSE `data` field. This schema is the payload for SDK transform, not
 * the raw HTTP body. Do not run JSON response conformance on stream bodies. A typical wire frame
 * is: id: 1 event: RESPONSE_CREATED data:
 * {"type":"RESPONSE_CREATED","response_id":"resp_e65a0a77-97a2-4c91-be60-eae7f6238015"}
 */
export type PlatformChatStreamEvent =
  | (PlatformChatStreamResponseCreated & { type: "RESPONSE_CREATED" })
  | (PlatformChatStreamProgress & { type: "RESPONSE_PROGRESS" })
  | (PlatformChatStreamOutputTextDelta & { type: "RESPONSE_OUTPUT_TEXT_DELTA" })
  | (PlatformChatStreamOutputTextDone & { type: "RESPONSE_OUTPUT_TEXT_DONE" })
  | (PlatformChatStreamResponseCompleted & { type: "RESPONSE_COMPLETED" })
  | (PlatformChatStreamResponseFailed & { type: "RESPONSE_FAILED" });

export const platformChatStreamEventSchema: Schema<PlatformChatStreamEvent> =
  s.discriminatedUnion<PlatformChatStreamEvent>("type", {
    RESPONSE_CREATED: platformChatStreamResponseCreatedSchema,
    RESPONSE_PROGRESS: platformChatStreamProgressSchema,
    RESPONSE_OUTPUT_TEXT_DELTA: platformChatStreamOutputTextDeltaSchema,
    RESPONSE_OUTPUT_TEXT_DONE: platformChatStreamOutputTextDoneSchema,
    RESPONSE_COMPLETED: platformChatStreamResponseCompletedSchema,
    RESPONSE_FAILED: platformChatStreamResponseFailedSchema,
  });
