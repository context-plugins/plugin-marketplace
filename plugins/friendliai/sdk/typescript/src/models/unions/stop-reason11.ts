import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stopReasonSchema, type StopReason } from "../stop-reason.js";

/** Why generation stopped. */
export type StopReason11 = StopReason;

export const stopReason11Schema: Schema<StopReason11> = s.of<StopReason11>(
  s.union([s.lazy(() => stopReasonSchema)]),
);
