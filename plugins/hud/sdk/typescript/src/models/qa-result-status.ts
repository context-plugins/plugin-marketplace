import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QaResultStatus = {
  Queued: "queued",
  Running: "running",
  Cancelling: "cancelling",
  Completed: "completed",
  Error: "error",
  Cancelled: "cancelled",
} as const;
export type QaResultStatus = (typeof QaResultStatus)[keyof typeof QaResultStatus] | (string & {});

export const qaResultStatusSchema: EnumSchema<QaResultStatus> = s.enumOf<QaResultStatus>(QaResultStatus);
