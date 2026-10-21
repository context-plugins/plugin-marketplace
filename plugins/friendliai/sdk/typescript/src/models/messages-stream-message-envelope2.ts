import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesUsage5Schema, type MessagesUsage5 } from "./messages-usage5.js";
import {
  messagesResponseContentBlockSchema,
  type MessagesResponseContentBlock,
} from "./unions/messages-response-content-block.js";
import { model17Schema, type Model17 } from "./unions/model17.js";
import { stopReason1Schema, type StopReason1 } from "./unions/stop-reason1.js";
import { stopSequenceSchema, type StopSequence } from "./unions/stop-sequence.js";

/** Initial response envelope for this streamed message. */
export type MessagesStreamMessageEnvelope2 = {
  /** Unique ID of the response message. */
  id: string;
  /** Object type, always `message`. @default "message" */
  type?: "message";
  /** Author role of streamed output, always `assistant`. @default "assistant" */
  role?: "assistant";
  /** Initialized as an empty array at start. Populated by subsequent block events. */
  content?: MessagesResponseContentBlock[];
  /** Stop reason placeholder at start. */
  stopReason?: StopReason1;
  /** Matched stop sequence placeholder at start. */
  stopSequence?: StopSequence;
  /** Running usage object. */
  usage: MessagesUsage5;
  /** Model identifier for this response, when available. */
  model?: Model17;
};

export const messagesStreamMessageEnvelope2Schema: Schema<MessagesStreamMessageEnvelope2> =
  s.object<MessagesStreamMessageEnvelope2>({
    id: s.string(),
    type: s.defaulted(s.literal("message"), "message"),
    role: s.defaulted(s.literal("assistant"), "assistant"),
    content: s.optional(s.array(s.lazy(() => messagesResponseContentBlockSchema))),
    stopReason: s.optional(s.lazy(() => stopReason1Schema)),
    stopSequence: s.optional(s.lazy(() => stopSequenceSchema)),
    usage: messagesUsage5Schema,
    model: s.optional(s.lazy(() => model17Schema)),
    _keysMap: {
      stopReason: "stop_reason",
      stopSequence: "stop_sequence",
    },
  });
