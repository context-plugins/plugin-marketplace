import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetGroupSummarySchema, type DatasetGroupSummary } from "./dataset-group-summary.js";

export type ListDatasetGroupsResponse = {
  /** An array of objects that summarize each dataset group's properties. */
  datasetGroups?: DatasetGroupSummary[];
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   * results, use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetGroupsResponseSchema: Schema<ListDatasetGroupsResponse> =
  s.object<ListDatasetGroupsResponse>(
    {
      datasetGroups: s.optional(s.array(s.lazy(() => datasetGroupSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        datasetGroups: "DatasetGroups",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
