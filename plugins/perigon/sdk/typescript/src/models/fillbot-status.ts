import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current event enrichment status. Accepts PENDING, IN_PROGRESS, COMPLETE, or EXHAUSTED. */
export const FillbotStatus = {
  Pending: "PENDING",
  InProgress: "IN_PROGRESS",
  Complete: "COMPLETE",
  Exhausted: "EXHAUSTED",
} as const;
export type FillbotStatus = (typeof FillbotStatus)[keyof typeof FillbotStatus] | (string & {});

export const fillbotStatusSchema: EnumSchema<FillbotStatus> = s.enumOf<FillbotStatus>(FillbotStatus);
