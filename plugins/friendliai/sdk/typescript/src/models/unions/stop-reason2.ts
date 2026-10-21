import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stopReasonSchema, type StopReason } from "../stop-reason.js";

/** Why generation stopped (`end_turn`, `max_tokens`, `tool_use`, `stop_sequence`). */
export type StopReason2 = StopReason;

export const stopReason2Schema: Schema<StopReason2> = s.of<StopReason2>(
  s.union([s.lazy(() => stopReasonSchema)]),
);
