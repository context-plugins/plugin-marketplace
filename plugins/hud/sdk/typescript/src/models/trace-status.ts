import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TraceStatus = {
  Pending: "pending",
  Initializing: "initializing",
  Running: "running",
  Completed: "completed",
  Error: "error",
  Cancelling: "cancelling",
  Cancelled: "cancelled",
} as const;
export type TraceStatus = (typeof TraceStatus)[keyof typeof TraceStatus] | (string & {});

export const traceStatusSchema: EnumSchema<TraceStatus> = s.enumOf<TraceStatus>(TraceStatus);
