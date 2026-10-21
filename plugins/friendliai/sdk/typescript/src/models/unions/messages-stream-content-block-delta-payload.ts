import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesStreamInputJsonDeltaSchema,
  type MessagesStreamInputJsonDelta,
} from "../messages-stream-input-json-delta.js";
import {
  messagesStreamSignatureDeltaSchema,
  type MessagesStreamSignatureDelta,
} from "../messages-stream-signature-delta.js";
import {
  messagesStreamTextDeltaSchema,
  type MessagesStreamTextDelta,
} from "../messages-stream-text-delta.js";
import {
  messagesStreamThinkingDeltaSchema,
  type MessagesStreamThinkingDelta,
} from "../messages-stream-thinking-delta.js";

/** Incremental delta payload. */
export type MessagesStreamContentBlockDeltaPayload =
  | (MessagesStreamInputJsonDelta & { type: "input_json_delta" })
  | (MessagesStreamSignatureDelta & { type: "signature_delta" })
  | (MessagesStreamTextDelta & { type: "text_delta" })
  | (MessagesStreamThinkingDelta & { type: "thinking_delta" });

export const messagesStreamContentBlockDeltaPayloadSchema: Schema<MessagesStreamContentBlockDeltaPayload> =
  s.discriminatedUnion<MessagesStreamContentBlockDeltaPayload>("type", {
    input_json_delta: messagesStreamInputJsonDeltaSchema,
    signature_delta: messagesStreamSignatureDeltaSchema,
    text_delta: messagesStreamTextDeltaSchema,
    thinking_delta: messagesStreamThinkingDeltaSchema,
  });
