import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSummarySchema, type DatasetSummary } from "./dataset-summary.js";

export type ListDatasetsResponse = {
  /** An array of objects that summarize each dataset's properties. */
  datasets?: DatasetSummary[];
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   * results, use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetsResponseSchema: Schema<ListDatasetsResponse> = s.object<ListDatasetsResponse>(
  {
    datasets: s.optional(s.array(s.lazy(() => datasetSummarySchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      datasets: "Datasets",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
