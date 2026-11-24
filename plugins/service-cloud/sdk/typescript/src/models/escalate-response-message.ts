import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";
import { targetSchema, type Target } from "./target.js";

export type EscalateResponseMessage = {
  /** Message type of an escalation message. @default "escalate" */
  type?: "escalate";
  /** UUID that references this message. */
  id: string;
  schedule?: Schedule;
  /** unique ID to identify the generation, used to submit feedback */
  feedbackId?: string;
  /** Array of transfer targets. */
  targets: Target[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const escalateResponseMessageSchema: Schema<EscalateResponseMessage> =
  s.object<EscalateResponseMessage>(
    {
      type: s.defaulted(s.literal("escalate"), "escalate"),
      id: s.string(),
      schedule: s.optional(s.lazy(() => scheduleSchema)),
      feedbackId: s.optional(s.string()),
      targets: s.array(s.lazy(() => targetSchema)),
    },
    { additionalProperties: s.json() },
  );
