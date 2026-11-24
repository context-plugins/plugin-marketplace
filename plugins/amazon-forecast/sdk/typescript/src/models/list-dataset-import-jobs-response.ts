import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetImportJobSummarySchema, type DatasetImportJobSummary } from "./dataset-import-job-summary.js";

export type ListDatasetImportJobsResponse = {
  /** An array of objects that summarize each dataset import job's properties. */
  datasetImportJobs?: DatasetImportJobSummary[];
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   * results, use the token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetImportJobsResponseSchema: Schema<ListDatasetImportJobsResponse> =
  s.object<ListDatasetImportJobsResponse>(
    {
      datasetImportJobs: s.optional(s.array(s.lazy(() => datasetImportJobSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        datasetImportJobs: "DatasetImportJobs",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
