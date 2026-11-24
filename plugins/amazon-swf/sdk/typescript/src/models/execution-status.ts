import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the execution. */
export const ExecutionStatus = {
  Open: "OPEN",
  Closed: "CLOSED",
} as const;
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus] | (string & {});

export const executionStatusSchema: EnumSchema<ExecutionStatus> = s.enumOf<ExecutionStatus>(ExecutionStatus);
