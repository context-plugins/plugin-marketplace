import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetPropertiesSchema, type DatasetProperties } from "./dataset-properties.js";

export type ListDatasetsResponse = {
  /** The dataset properties list. */
  datasetPropertiesList?: DatasetProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetsResponseSchema: Schema<ListDatasetsResponse> = s.object<ListDatasetsResponse>(
  {
    datasetPropertiesList: s.optional(s.array(s.lazy(() => datasetPropertiesSchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      datasetPropertiesList: "DatasetPropertiesList",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
