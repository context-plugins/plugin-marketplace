import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesUsage1Schema, type MessagesUsage1 } from "./messages-usage1.js";
import {
  messagesResponseContentBlockSchema,
  type MessagesResponseContentBlock,
} from "./unions/messages-response-content-block.js";
import { model18Schema, type Model18 } from "./unions/model18.js";
import { stopReason2Schema, type StopReason2 } from "./unions/stop-reason2.js";
import { stopSequence2Schema, type StopSequence2 } from "./unions/stop-sequence2.js";

export type ContainerMessagesSuccess = {
  /** Unique identifier for this message response. */
  id: string;
  /** Response object type (`message`). @default "message" */
  type?: "message";
  /** Role of the output message author (`assistant`). @default "assistant" */
  role?: "assistant";
  /** Assistant output blocks in generation order. */
  content: MessagesResponseContentBlock[];
  /** Why generation stopped (`end_turn`, `max_tokens`, `tool_use`, `stop_sequence`). */
  stopReason?: StopReason2;
  /** Matched stop string when `stop_reason` is `stop_sequence`; otherwise null. */
  stopSequence?: StopSequence2;
  /** Token usage details for this response. */
  usage: MessagesUsage1;
  /** Model used to generate the response. */
  model?: Model18;
};

export const containerMessagesSuccessSchema: Schema<ContainerMessagesSuccess> =
  s.object<ContainerMessagesSuccess>({
    id: s.string(),
    type: s.defaulted(s.literal("message"), "message"),
    role: s.defaulted(s.literal("assistant"), "assistant"),
    content: s.array(s.lazy(() => messagesResponseContentBlockSchema)),
    stopReason: s.optional(s.lazy(() => stopReason2Schema)),
    stopSequence: s.optional(s.lazy(() => stopSequence2Schema)),
    usage: messagesUsage1Schema,
    model: s.optional(s.lazy(() => model18Schema)),
    _keysMap: {
      stopReason: "stop_reason",
      stopSequence: "stop_sequence",
    },
  });
