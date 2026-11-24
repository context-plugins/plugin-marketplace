import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListDatasetLabelsRequest = {
  /** The Amazon Resource Name (ARN) of the dataset that you want to use. */
  datasetArn: string;
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon
   * Rekognition Custom Labels returns a pagination token in the response. You can use this
   * pagination token to retrieve the next set of results.
   */
  nextToken?: string;
  /**
   * The maximum number of results to return per paginated call. The largest value you can specify
   * is 100. If you specify a value greater than 100, a ValidationException error occurs. The
   * default value is 100.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetLabelsRequestSchema: Schema<ListDatasetLabelsRequest> =
  s.object<ListDatasetLabelsRequest>(
    {
      datasetArn: s.string(),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        datasetArn: "DatasetArn",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
