import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testExecutionSchema, type TestExecution } from "./test-execution.js";

/** Paginated response containing test executions */
export type TestExecutionListResponse = {
  /** Total number of test executions */
  totalCount?: number;
  executions?: TestExecution[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testExecutionListResponseSchema: Schema<TestExecutionListResponse> =
  s.object<TestExecutionListResponse>(
    {
      totalCount: s.optional(s.int()),
      executions: s.optional(s.array(s.lazy(() => testExecutionSchema))),
    },
    { additionalProperties: s.json() },
  );
