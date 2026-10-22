import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stopReasonSchema, type StopReason } from "../stop-reason.js";

/** Stop reason placeholder at start. */
export type StopReason1 = StopReason;

export const stopReason1Schema: Schema<StopReason1> = s.of<StopReason1>(
  s.union([s.lazy(() => stopReasonSchema)]),
);
