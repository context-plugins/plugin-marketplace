import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event1Schema, type Event1 } from "./event1.js";

/**
 * SSE event envelope for `POST /agents/{agentKey}/conversations/stream`. AG-UI is the sole wire
 * protocol.
 *
 * `event` carries the AG-UI type name and `data` is a JSON-encoded object that includes a `"type"`
 * field matching `event`, plus type-specific fields. The public route requires `chatMode: quick`.
 * Forwarded lifecycle events may carry `runId`, `threadId`, and `parentRunId`; gateway-generated
 * root terminal events do not.
 *
 * Stable gateway-generated top-level outcomes are `RUN_FINISHED` as `{ type, result }` and
 * `RUN_ERROR` as `{ type, message, code? }`. Clients should ignore unknown event names rather than
 * treating them as errors.
 */
export type AgentStreamSseEvent = {
  event?: Event1;
  /**
   * JSON-encoded event payload. The decoded JSON includes a `"type"` field matching `event`, plus
   * type-specific fields. Shape depends on `event`.
   */
  data?: string;
};

export const agentStreamSseEventSchema: Schema<AgentStreamSseEvent> = s.object<AgentStreamSseEvent>({
  event: s.optional(s.lazy(() => event1Schema)),
  data: s.optional(s.string()),
});
