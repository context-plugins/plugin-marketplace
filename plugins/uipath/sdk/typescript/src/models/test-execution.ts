import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusUiPathTestManagerTestExecutionsApiSchema,
  type StatusUiPathTestManagerTestExecutionsApi,
} from "./status-ui-path-test-manager-test-executions-api.js";

/** A test set execution run with aggregated results */
export type TestExecution = {
  /** Unique identifier of the test execution */
  id?: string;
  /** Identifier of the test set that was executed */
  testSetId?: string;
  /** Display name of the test set that was executed */
  testSetName?: string;
  /** Aggregate execution status */
  status?: StatusUiPathTestManagerTestExecutionsApi;
  /** ISO 8601 timestamp when execution began */
  startedOn?: Date;
  /** ISO 8601 timestamp when execution completed */
  finishedOn?: Date;
  /** Total number of test cases in the execution */
  totalTestCases?: number;
  /** Number of test cases that passed */
  passedTestCases?: number;
  /** Number of test cases that failed */
  failedTestCases?: number;
  /** Number of test cases that could not be executed */
  blockedTestCases?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testExecutionSchema: Schema<TestExecution> = s.object<TestExecution>(
  {
    id: s.optional(s.string()),
    testSetId: s.optional(s.string()),
    testSetName: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusUiPathTestManagerTestExecutionsApiSchema)),
    startedOn: s.optional(s.dateTime()),
    finishedOn: s.optional(s.dateTime()),
    totalTestCases: s.optional(s.int()),
    passedTestCases: s.optional(s.int()),
    failedTestCases: s.optional(s.int()),
    blockedTestCases: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
