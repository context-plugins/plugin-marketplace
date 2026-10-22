import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event1Schema, type Event1 } from "./event1.js";

/**
 * Server-Sent Event envelope for public follow-up streams using `agent`, `internal_search`, or
 * `web_search` on an existing conversation. AG-UI is the sole wire protocol.
 *
 * `event` carries the AG-UI type name and `data` is a JSON-encoded object that includes a `"type"`
 * field matching `event`, plus type-specific fields. Universal `agent` mode may emit step and
 * nested child-run events. Stable gateway-generated top-level outcomes:
 *
 * - `CUSTOM` (`name: "conversation_created"`) — fired once on connection.
 * - `RUN_FINISHED` — fired once after the AI backend finishes. The gateway emits `{ type, result
 *   }`; `result` carries `{ conversation, recordsUsed, meta }`. `recordsUsed` is the count of
 *   citations attached to the new assistant message.
 * - `RUN_ERROR` — fired when the stream fails. Carries a `message` and optional `code`; the
 *   conversation row is marked FAILED before close.
 *
 * Forwarded upstream lifecycle or child-run events may contain `runId`, `threadId`, and
 * `parentRunId`. Gateway-generated root terminal events do not. Clients should ignore unknown event
 * names rather than treating them as errors.
 */
export type ConversationMessageStreamSseEvent = {
  event?: Event1;
  /**
   * JSON-encoded event payload. The decoded JSON includes a `"type"` field matching `event`, plus
   * type-specific fields. Shape depends on `event`. Forwarded lifecycle events may carry `runId`,
   * `threadId`, and `parentRunId`.
   */
  data?: string;
};

export const conversationMessageStreamSseEventSchema: Schema<ConversationMessageStreamSseEvent> =
  s.object<ConversationMessageStreamSseEvent>({
    event: s.optional(s.lazy(() => event1Schema)),
    data: s.optional(s.string()),
  });
