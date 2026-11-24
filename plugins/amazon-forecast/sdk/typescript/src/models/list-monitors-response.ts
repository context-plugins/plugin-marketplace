import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { monitorSummarySchema, type MonitorSummary } from "./monitor-summary.js";

export type ListMonitorsResponse = {
  /** An array of objects that summarize each monitor's properties. */
  monitors?: MonitorSummary[];
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   * results, use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMonitorsResponseSchema: Schema<ListMonitorsResponse> = s.object<ListMonitorsResponse>(
  {
    monitors: s.optional(s.array(s.lazy(() => monitorSummarySchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      monitors: "Monitors",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
