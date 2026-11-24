import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executionListItemSchema, type ExecutionListItem } from "./execution-list-item.js";

export type ListExecutionsOutput = {
  /** The list of matching executions. */
  executions: ExecutionListItem[];
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique
   * pagination token for each page. Make the call again using the returned token to retrieve the
   * next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * Using an expired pagination token will return an HTTP 400 InvalidToken error.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listExecutionsOutputSchema: Schema<ListExecutionsOutput> = s.object<ListExecutionsOutput>(
  {
    executions: s.array(s.lazy(() => executionListItemSchema)),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
