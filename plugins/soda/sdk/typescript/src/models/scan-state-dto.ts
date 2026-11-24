import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScanStateDto = {
  Queuing: "queuing",
  Executing: "executing",
  Started: "started",
  CancelationRequested: "cancelationRequested",
  TimeOutRequested: "timeOutRequested",
  Canceled: "canceled",
  TimedOut: "timedOut",
  Failed: "failed",
  CompletedWithErrors: "completedWithErrors",
  CompletedWithFailures: "completedWithFailures",
  CompletedWithWarnings: "completedWithWarnings",
  Completed: "completed",
} as const;
export type ScanStateDto = (typeof ScanStateDto)[keyof typeof ScanStateDto] | (string & {});

export const scanStateDtoSchema: EnumSchema<ScanStateDto> = s.enumOf<ScanStateDto>(ScanStateDto);
