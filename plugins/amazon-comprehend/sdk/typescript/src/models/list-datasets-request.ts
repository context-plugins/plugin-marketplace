import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetFilterSchema, type DatasetFilter } from "./dataset-filter.js";

export type ListDatasetsRequest = {
  /** The Amazon Resource Number (ARN) of the flywheel. */
  flywheelArn?: string;
  filter?: DatasetFilter;
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Maximum number of results to return in a response. The default is 100. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetsRequestSchema: Schema<ListDatasetsRequest> = s.object<ListDatasetsRequest>(
  {
    flywheelArn: s.optional(s.string()),
    filter: s.optional(s.lazy(() => datasetFilterSchema)),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    _keysMap: {
      flywheelArn: "FlywheelArn",
      filter: "Filter",
      nextToken: "NextToken",
      maxResults: "MaxResults",
    },
  },
  { additionalProperties: s.json() },
);
