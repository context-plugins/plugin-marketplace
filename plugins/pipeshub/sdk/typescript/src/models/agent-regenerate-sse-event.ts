import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event1Schema, type Event1 } from "./event1.js";

/**
 * SSE event envelope for `POST
 * /agents/{agentKey}/conversations/{conversationId}/message/{messageId}/regenerate`. AG-UI is the
 * sole wire protocol.
 *
 * `event` carries the AG-UI type name and `data` is a JSON-encoded object that includes a `"type"`
 * field matching `event`, plus type-specific fields. Stable gateway-generated top-level outcomes:
 *
 * - `RUN_FINISHED` returns `{ type, result }` where `result` is `{ conversation, recordsUsed, meta
 *   }` — the updated conversation plus request metadata after the regenerated response is
 *   persisted.
 * - `RUN_ERROR` returns `{ type, message, code? }`. Conversation lookup failures, unauthorized
 *   conversation access, and regenerate rule failures such as "not the last message" are reported
 *   here.
 *
 * Other events are forwarded from the agent backend and should be treated as informational updates.
 * Those forwarded lifecycle and child-run events may contain `runId`, `threadId`, and
 * `parentRunId`; the gateway-generated root terminal event does not.
 */
export type AgentRegenerateSseEvent = {
  event?: Event1;
  /**
   * JSON-encoded event payload. The decoded JSON includes a `"type"` field matching `event`, plus
   * type-specific fields. Shape depends on `event`.
   */
  data?: string;
};

export const agentRegenerateSseEventSchema: Schema<AgentRegenerateSseEvent> =
  s.object<AgentRegenerateSseEvent>({
    event: s.optional(s.lazy(() => event1Schema)),
    data: s.optional(s.string()),
  });
