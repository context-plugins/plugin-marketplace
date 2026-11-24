import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiMode1Schema, type ApiMode1 } from "./api-mode1.js";
import { testExecutionModality1Schema, type TestExecutionModality1 } from "./test-execution-modality1.js";
import { testExecutionStatus1Schema, type TestExecutionStatus1 } from "./test-execution-status1.js";
import { testExecutionTargetSchema, type TestExecutionTarget } from "./test-execution-target.js";

export type TestExecutionSummary = {
  /** The unique identifier of the test execution. */
  testExecutionId?: string;
  /** The date and time at which the test execution was created. */
  creationDateTime?: Date;
  /** The date and time at which the test execution was last updated. */
  lastUpdatedDateTime?: Date;
  /** The current status of the test execution. */
  testExecutionStatus?: TestExecutionStatus1;
  /** The unique identifier of the test set used in the test execution. */
  testSetId?: string;
  /** The name of the test set used in the test execution. */
  testSetName?: string;
  target?: TestExecutionTarget;
  /** Specifies whether the API mode for the test execution is streaming or non-streaming. */
  apiMode?: ApiMode1;
  /** Specifies whether the data used for the test execution is written or spoken. */
  testExecutionModality?: TestExecutionModality1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testExecutionSummarySchema: Schema<TestExecutionSummary> = s.object<TestExecutionSummary>(
  {
    testExecutionId: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
    testExecutionStatus: s.optional(s.lazy(() => testExecutionStatus1Schema)),
    testSetId: s.optional(s.string()),
    testSetName: s.optional(s.string()),
    target: s.optional(s.lazy(() => testExecutionTargetSchema)),
    apiMode: s.optional(s.lazy(() => apiMode1Schema)),
    testExecutionModality: s.optional(s.lazy(() => testExecutionModality1Schema)),
  },
  { additionalProperties: s.json() },
);
