import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";

export type ListMonitorEvaluationsRequest = {
  /**
   * If the result of the previous request was truncated, the response includes a NextToken. To
   * retrieve the next set of results, use the token in the next request. Tokens expire after 24
   * hours.
   */
  nextToken?: string;
  /** The maximum number of monitoring results to return. */
  maxResults?: number;
  /** The Amazon Resource Name (ARN) of the monitor resource to get results from. */
  monitorArn: string;
  /**
   * An array of filters. For each filter, provide a condition and a match statement. The condition
   * is either IS or IS_NOT, which specifies whether to include or exclude the resources that match
   * the statement from the list. The match statement consists of a key and a value. Filter
   * properties Condition - The condition to apply. Valid values are IS and IS_NOT. Key - The name
   * of the parameter to filter on. The only valid value is EvaluationState. Value - The value to
   * match. Valid values are only SUCCESS or FAILURE. For example, to list only successful monitor
   * evaluations, you would specify: "Filters":
   */
  filters?: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMonitorEvaluationsRequestSchema: Schema<ListMonitorEvaluationsRequest> =
  s.object<ListMonitorEvaluationsRequest>(
    {
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      monitorArn: s.string(),
      filters: s.optional(s.array(s.lazy(() => filterSchema))),
      _keysMap: {
        nextToken: "NextToken",
        maxResults: "MaxResults",
        monitorArn: "MonitorArn",
        filters: "Filters",
      },
    },
    { additionalProperties: s.json() },
  );
