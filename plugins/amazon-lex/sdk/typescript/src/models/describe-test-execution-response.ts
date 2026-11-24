import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiModeSchema, type ApiMode } from "./api-mode.js";
import { testExecutionModalitySchema, type TestExecutionModality } from "./test-execution-modality.js";
import { testExecutionStatusSchema, type TestExecutionStatus } from "./test-execution-status.js";
import { testExecutionTargetSchema, type TestExecutionTarget } from "./test-execution-target.js";

export type DescribeTestExecutionResponse = {
  /** The execution Id for the test set execution. */
  testExecutionId?: string;
  /** The execution creation date and time for the test set execution. */
  creationDateTime?: Date;
  /** The date and time of the last update for the execution. */
  lastUpdatedDateTime?: Date;
  /** The test execution status for the test execution. */
  testExecutionStatus?: TestExecutionStatus;
  /** The test set Id for the test set execution. */
  testSetId?: string;
  /** The test set name of the test set execution. */
  testSetName?: string;
  target?: TestExecutionTarget;
  /**
   * Indicates whether we use streaming or non-streaming APIs are used for the test set execution.
   * For streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming,
   * RecognizeUtterance and RecognizeText Amazon Lex Runtime API is used.
   */
  apiMode?: ApiMode;
  /** Indicates whether test set is audio or text. */
  testExecutionModality?: TestExecutionModality;
  /** Reasons for the failure of the test set execution. */
  failureReasons?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestExecutionResponseSchema: Schema<DescribeTestExecutionResponse> =
  s.object<DescribeTestExecutionResponse>(
    {
      testExecutionId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
      testExecutionStatus: s.optional(s.lazy(() => testExecutionStatusSchema)),
      testSetId: s.optional(s.string()),
      testSetName: s.optional(s.string()),
      target: s.optional(s.lazy(() => testExecutionTargetSchema)),
      apiMode: s.optional(s.lazy(() => apiModeSchema)),
      testExecutionModality: s.optional(s.lazy(() => testExecutionModalitySchema)),
      failureReasons: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
