import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { redriveFilterSchema, type RedriveFilter } from "./redrive-filter.js";
import { statusFilterSchema, type StatusFilter } from "./status-filter.js";

export type ListExecutionsInput = {
  /**
   * The Amazon Resource Name (ARN) of the state machine whose executions is listed. You can specify
   * either a mapRunArn or a stateMachineArn, but not both. You can also return a list of executions
   * associated with a specific alias or version, by specifying an alias ARN or a version ARN in the
   * stateMachineArn parameter.
   */
  stateMachineArn?: string;
  /**
   * If specified, only list the executions whose current execution status matches the given filter.
   * If you provide a PENDING_REDRIVE statusFilter, you must specify mapRunArn. For more
   * information, see Child workflow execution redrive behaviour in the Step Functions Developer
   * Guide. If you provide a stateMachineArn and a PENDING_REDRIVE statusFilter, the API returns a
   * validation exception.
   */
  statusFilter?: StatusFilter;
  /**
   * The maximum number of results that are returned per call. You can use nextToken to obtain
   * further pages of results. The default is 100 and the maximum allowed page size is 1000. A value
   * of 0 uses the default. This is only an upper limit. The actual number of results returned per
   * call might be fewer than the specified maximum.
   */
  maxResults?: number;
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique
   * pagination token for each page. Make the call again using the returned token to retrieve the
   * next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * Using an expired pagination token will return an HTTP 400 InvalidToken error.
   */
  nextToken?: string;
  /**
   * The Amazon Resource Name (ARN) of the Map Run that started the child workflow executions. If
   * the mapRunArn field is specified, a list of all of the child workflow executions started by a
   * Map Run is returned. For more information, see Examining Map Run in the Step Functions
   * Developer Guide. You can specify either a mapRunArn or a stateMachineArn, but not both.
   */
  mapRunArn?: string;
  /**
   * Sets a filter to list executions based on whether or not they have been redriven. For a
   * Distributed Map, redriveFilter sets a filter to list child workflow executions based on whether
   * or not they have been redriven. If you do not provide a redriveFilter, Step Functions returns a
   * list of both redriven and non-redriven executions. If you provide a state machine ARN in
   * redriveFilter, the API returns a validation exception.
   */
  redriveFilter?: RedriveFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listExecutionsInputSchema: Schema<ListExecutionsInput> = s.object<ListExecutionsInput>(
  {
    stateMachineArn: s.optional(s.string()),
    statusFilter: s.optional(s.lazy(() => statusFilterSchema)),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
    mapRunArn: s.optional(s.string()),
    redriveFilter: s.optional(s.lazy(() => redriveFilterSchema)),
  },
  { additionalProperties: s.json() },
);
