import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the test execution. */
export const TestExecutionStatus1 = {
  Pending: "Pending",
  Waiting: "Waiting",
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Stopping: "Stopping",
  Stopped: "Stopped",
} as const;
export type TestExecutionStatus1 =
  | (typeof TestExecutionStatus1)[keyof typeof TestExecutionStatus1]
  | (string & {});

export const testExecutionStatus1Schema: EnumSchema<TestExecutionStatus1> =
  s.enumOf<TestExecutionStatus1>(TestExecutionStatus1);
