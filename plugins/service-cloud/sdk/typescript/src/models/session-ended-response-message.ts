import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type SessionEndedResponseMessage = {
  /** Message type informing that the session ended. @default "sessionEnded" */
  type?: "sessionEnded";
  /** UUID that references this message. */
  id: string;
  /** Reason the session ended. */
  reason: Reason;
  schedule?: Schedule;
  /** unique ID to identify the generation, used to submit feedback */
  feedbackId?: string;
};

export const sessionEndedResponseMessageSchema: Schema<SessionEndedResponseMessage> =
  s.object<SessionEndedResponseMessage>({
    type: s.defaulted(s.literal("sessionEnded"), "sessionEnded"),
    id: s.string(),
    reason: reasonSchema,
    schedule: s.optional(s.lazy(() => scheduleSchema)),
    feedbackId: s.optional(s.string()),
  });
