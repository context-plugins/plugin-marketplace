import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListDatasetEntriesResponse = {
  /** A list of entries (images) in the dataset. */
  datasetEntries?: string[];
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon
   * Rekognition Custom Labels returns a pagination token in the response. You can use this
   * pagination token to retrieve the next set of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetEntriesResponseSchema: Schema<ListDatasetEntriesResponse> =
  s.object<ListDatasetEntriesResponse>(
    {
      datasetEntries: s.optional(s.array(s.string())),
      nextToken: s.optional(s.string()),
      _keysMap: {
        datasetEntries: "DatasetEntries",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
