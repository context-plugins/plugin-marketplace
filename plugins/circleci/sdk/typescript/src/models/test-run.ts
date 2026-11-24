import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testCountsSchema, type TestCounts } from "./test-counts.js";

export type TestRun = {
  /** The pipeline number */
  pipelineNumber?: number;
  /** The workflow ID */
  workflowId?: string;
  /** Success rate of tests in this run */
  successRate?: number;
  /** Test counts by result */
  testCounts?: TestCounts;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testRunSchema: Schema<TestRun> = s.object<TestRun>(
  {
    pipelineNumber: s.optional(s.int()),
    workflowId: s.optional(s.string()),
    successRate: s.optional(s.float64()),
    testCounts: s.optional(s.lazy(() => testCountsSchema)),
    _keysMap: {
      pipelineNumber: "pipeline_number",
      workflowId: "workflow_id",
      successRate: "success_rate",
      testCounts: "test_counts",
    },
  },
  { additionalProperties: s.json() },
);
