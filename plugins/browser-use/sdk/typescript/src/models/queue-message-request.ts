import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attachedfileidsSchema, type Attachedfileids } from "./unions/attachedfileids.js";

/**
 * Send a message to a session. If the session is busy the message waits on the queue and runs as
 * the next turn; if idle it runs immediately.
 *
 * Set `interrupt` to make it take effect now: the session's active run is cancelled and this
 * message drains straight after. Interrupt is a no-op when the session is already idle, and
 * BEST-EFFORT when busy — if the cancel can't be delivered, the message stays queued and runs after
 * the current turn.
 */
export type QueueMessageRequest = {
  text: string;
  /** @default false */
  interrupt?: boolean;
  attachedFileIds?: Attachedfileids;
};

const queueMessageRequestProperties: s.Shape<QueueMessageRequest> = {
  text: s.string(),
  interrupt: s.defaulted(s.boolean(), false),
  attachedFileIds: s.optional(s.lazy(() => attachedfileidsSchema)),
};

export const queueMessageRequestInternalSchema: Schema<QueueMessageRequest> = s.object<QueueMessageRequest>(
  queueMessageRequestProperties,
);

export const queueMessageRequestSchema: Schema<QueueMessageRequest> = s.lazySchema(() =>
  s.object<QueueMessageRequest>({
    ...queueMessageRequestProperties,
    text: s.string().check(s.minLength(1)),
  }),
);
