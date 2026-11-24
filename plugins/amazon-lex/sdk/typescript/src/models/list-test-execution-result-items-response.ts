import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testExecutionResultItemsSchema,
  type TestExecutionResultItems,
} from "./test-execution-result-items.js";

export type ListTestExecutionResultItemsResponse = {
  testExecutionResults?: TestExecutionResultItems;
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListTestExecutionResultItems operation. If the nextToken field is present, you send the
   * contents as the nextToken parameter of a ListTestExecutionResultItems operation request to get
   * the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTestExecutionResultItemsResponseSchema: Schema<ListTestExecutionResultItemsResponse> =
  s.object<ListTestExecutionResultItemsResponse>(
    {
      testExecutionResults: s.optional(s.lazy(() => testExecutionResultItemsSchema)),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
