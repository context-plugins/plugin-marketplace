import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSchema, type Dataset } from "./dataset.js";

/** Response message for ListDatasets. */
export type ListDatasetsResponse = {
  /**
   * A token to retrieve next page of results. Pass this token to the page_token field in the
   * ListDatasetsRequest to obtain the corresponding page.
   */
  nextPageToken?: string;
  /** The datasets read. */
  datasets?: Dataset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetsResponseSchema: Schema<ListDatasetsResponse> = s.object<ListDatasetsResponse>(
  {
    nextPageToken: s.optional(s.string()),
    datasets: s.optional(s.array(s.lazy(() => datasetSchema))),
  },
  { additionalProperties: s.json() },
);
