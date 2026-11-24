import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetLabelDescriptionSchema, type DatasetLabelDescription } from "./dataset-label-description.js";

export type ListDatasetLabelsResponse = {
  /** A list of the labels in the dataset. */
  datasetLabelDescriptions?: DatasetLabelDescription[];
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon
   * Rekognition Custom Labels returns a pagination token in the response. You can use this
   * pagination token to retrieve the next set of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetLabelsResponseSchema: Schema<ListDatasetLabelsResponse> =
  s.object<ListDatasetLabelsResponse>(
    {
      datasetLabelDescriptions: s.optional(s.array(s.lazy(() => datasetLabelDescriptionSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        datasetLabelDescriptions: "DatasetLabelDescriptions",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
