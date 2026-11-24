import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testSetSummarySchema, type TestSetSummary } from "./test-set-summary.js";

export type ListTestSetsResponse = {
  /** The selected test sets in a list of test sets. */
  testSets?: TestSetSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListTestSets operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListTestSets operation request to get the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTestSetsResponseSchema: Schema<ListTestSetsResponse> = s.object<ListTestSetsResponse>(
  {
    testSets: s.optional(s.array(s.lazy(() => testSetSummarySchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
