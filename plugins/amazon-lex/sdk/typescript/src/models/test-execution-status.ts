import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The test execution status for the test execution. */
export const TestExecutionStatus = {
  Pending: "Pending",
  Waiting: "Waiting",
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Stopping: "Stopping",
  Stopped: "Stopped",
} as const;
export type TestExecutionStatus =
  | (typeof TestExecutionStatus)[keyof typeof TestExecutionStatus]
  | (string & {});

export const testExecutionStatusSchema: EnumSchema<TestExecutionStatus> =
  s.enumOf<TestExecutionStatus>(TestExecutionStatus);
