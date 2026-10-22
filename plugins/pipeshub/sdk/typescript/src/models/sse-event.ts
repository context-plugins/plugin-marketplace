import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event1Schema, type Event1 } from "./event1.js";

/**
 * Server-Sent Event envelope for streaming chat responses. AG-UI is the sole wire protocol.
 *
 * `event` carries the AG-UI type name and `data` is a JSON-encoded object that includes a `"type"`
 * field matching `event`, plus type-specific fields. Stable gateway-generated top-level outcomes:
 *
 * - `RUN_FINISHED` — `{ type, result }`; `result` carries the full persisted `conversation` and a
 *   `meta` block with `requestId`, `timestamp` and `duration`.
 * - `RUN_ERROR` — `{ type, message, code? }`. The conversation row is marked FAILED before the
 *   stream closes.
 *
 * Forwarded upstream lifecycle or child-run events may contain `runId`, `threadId`, and
 * `parentRunId`. Gateway-generated root terminal events do not. Clients should ignore unknown event
 * names.
 */
export type SseEvent = {
  event?: Event1;
  /**
   * JSON-encoded event payload. The decoded JSON includes a `"type"` field matching `event`, plus
   * type-specific fields. Shape depends on `event`.
   */
  data?: string;
};

export const sseEventSchema: Schema<SseEvent> = s.object<SseEvent>({
  event: s.optional(s.lazy(() => event1Schema)),
  data: s.optional(s.string()),
});
