import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stopReason11Schema, type StopReason11 } from "./unions/stop-reason11.js";
import { stopSequence1Schema, type StopSequence1 } from "./unions/stop-sequence1.js";

export type MessagesStreamMessageDeltaPayload = {
  /** Why generation stopped. */
  stopReason?: StopReason11;
  /** Matched stop sequence when `stop_reason=stop_sequence`. */
  stopSequence?: StopSequence1;
};

export const messagesStreamMessageDeltaPayloadSchema: Schema<MessagesStreamMessageDeltaPayload> =
  s.object<MessagesStreamMessageDeltaPayload>({
    stopReason: s.optional(s.lazy(() => stopReason11Schema)),
    stopSequence: s.optional(s.lazy(() => stopSequence1Schema)),
    _keysMap: {
      stopReason: "stop_reason",
      stopSequence: "stop_sequence",
    },
  });
