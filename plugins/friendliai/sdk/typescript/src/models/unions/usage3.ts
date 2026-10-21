import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  messagesStreamMessageDeltaUsageSchema,
  type MessagesStreamMessageDeltaUsage,
} from "../messages-stream-message-delta-usage.js";

/** Usage delta object that may be emitted near stream completion. */
export type Usage3 = MessagesStreamMessageDeltaUsage;

export const usage3Schema: Schema<Usage3> = s.of<Usage3>(
  s.union([s.lazy(() => messagesStreamMessageDeltaUsageSchema)]),
);
