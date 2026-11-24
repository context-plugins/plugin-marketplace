import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anomalousLogGroupSchema, type AnomalousLogGroup } from "./anomalous-log-group.js";

export type ListAnomalousLogGroupsResponse = {
  /** The ID of the insight containing the log groups. */
  insightId: string;
  /** The list of Amazon CloudWatch log groups that are related to an insight. */
  anomalousLogGroups: AnomalousLogGroup[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAnomalousLogGroupsResponseSchema: Schema<ListAnomalousLogGroupsResponse> =
  s.object<ListAnomalousLogGroupsResponse>(
    {
      insightId: s.string(),
      anomalousLogGroups: s.array(s.lazy(() => anomalousLogGroupSchema)),
      nextToken: s.optional(s.string()),
      _keysMap: {
        insightId: "InsightId",
        anomalousLogGroups: "AnomalousLogGroups",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
