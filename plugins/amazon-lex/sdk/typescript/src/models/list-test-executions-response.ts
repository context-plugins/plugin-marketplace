import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testExecutionSummarySchema, type TestExecutionSummary } from "./test-execution-summary.js";

export type ListTestExecutionsResponse = {
  /** The list of test executions. */
  testExecutions?: TestExecutionSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListTestExecutions operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListTestExecutions operation request to get the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTestExecutionsResponseSchema: Schema<ListTestExecutionsResponse> =
  s.object<ListTestExecutionsResponse>(
    {
      testExecutions: s.optional(s.array(s.lazy(() => testExecutionSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
